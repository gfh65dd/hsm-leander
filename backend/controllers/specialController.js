// const Special = require('../models/Special');
// const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
// const { s3 } = require('../config/s3'); // Import the client we configured

// // GET all active specials
// exports.getSpecials = async (req, res) => {
//   try {
//     const now = new Date();
//     const specials = await Special.find({ validUpTo: { $gte: now } }).sort({ createdAt: -1 });
//     res.json(specials);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // CREATE special
// exports.createSpecial = async (req, res) => {
//   try {
//     const { title, description, validUpTo } = req.body;
    
//     if (!req.file) {
//       return res.status(400).json({ error: 'Image is required' });
//     }

//     const newSpecial = new Special({
//       title,
//       description,
//       validUpTo,
//       imageLink: req.file.location, // Public URL provided by S3
//       s3Key: req.file.key           // This will be 'user-uploads/filename.jpg'
//     });

//     await newSpecial.save();
//     res.status(201).json(newSpecial);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// // DELETE special
// exports.deleteSpecial = async (req, res) => {
//   try {
//     const special = await Special.findById(req.params.id);
//     if (!special) return res.status(404).json({ error: 'Special not found' });

//     // Delete the specific object from S3 using the stored key
//     const deleteParams = {
//       Bucket: process.env.AWS_BUCKET_NAME,
//       Key: special.s3Key, 
//     };
    
//     try {
//       await s3.send(new DeleteObjectCommand(deleteParams));
//     } catch (s3Err) {
//       console.error("S3 Deletion Error:", s3Err);
//       // We continue to delete from DB even if S3 fails (e.g. file already gone)
//     }

//     await Special.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Special and associated image removed successfully' });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };





const Special = require('../models/Special');
const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { s3 } = require('../config/s3');

// GET all active specials
//--------------------------------------------------------------------------------

//gives error due to Timezone Mismatch and Date Format

/*exports.getSpecials = async (req, res) => {
  try {
    const now = new Date();
    const specials = await Special.findAll({
      where: { validUpTo: { [require('sequelize').Op.gte]: now } },
      order: [['createdAt', 'DESC']]
    });
    res.json(specials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/
//---------------------------------------------------------------------------------
const { Op } = require('sequelize');

exports.getSpecials = async (req, res) => {
  try {
    const now = new Date();
    const specials = await Special.findAll({
      // Re-enable this once you confirm data is in the DB
      where: {
        validUpTo: {
          [Op.gte]: now // "Greater than or equal to now"
        }
      },
      order: [['createdAt', 'DESC']]
    });
    res.json(specials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
/*
//-----------------------------------------------------------
exports.getSpecials = async (req, res) => {
  try {
    // Remove the 'where' clause temporarily to see EVERYTHING
    const specials = await Special.findAll({
      order: [['createdAt', 'DESC']]
    });
    res.json(specials);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};*/
// CREATE special
exports.createSpecial = async (req, res) => {
  try {
    const { title, description, validUpTo } = req.body;
    if (!req.file) return res.status(400).json({ error: 'Image is required' });

    const newSpecial = await Special.create({
      title,
      description,
      validUpTo,
      imageLink: req.file.location,
      s3Key: req.file.key
    });

    res.status(201).json(newSpecial);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE special
exports.deleteSpecial = async (req, res) => {
  try {
    const special = await Special.findByPk(req.params.id);
    if (!special) return res.status(404).json({ error: 'Special not found' });

    // Delete from S3
    try {
      await s3.send(new DeleteObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key: special.s3Key }));
    } catch (s3Err) {
      console.error("S3 Deletion Error:", s3Err);
    }

    await special.destroy();
    res.json({ message: 'Special and associated image removed successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
  
// Update an existing special
exports.updateSpecial = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, validUpTo } = req.body;

    // 1. Find the existing record by its Primary Key (ID)
    const special = await Special.findByPk(id);

    if (!special) {
      return res.status(404).json({ error: 'Special not found' });
    }

    // 2. Update text fields (use existing value if new one isn't provided)
    special.title = title || special.title;
    special.description = description || special.description;
    special.validUpTo = validUpTo || special.validUpTo;

    // 3. Handle image replacement
    if (req.file) {
      // Logic to delete old image from S3 would go here using special.s3Key
      special.imageLink = req.file.location;
      special.s3Key = req.file.key;
    }

    // 4. Save changes back to PostgreSQL
    await special.save();
    res.json(special);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};