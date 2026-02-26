// // const path = require('path');
// // require('dotenv').config({ path: path.resolve(__dirname, '.env') });
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const multer = require('multer');
// // const AWS = require('aws-sdk');
// // const cron = require('node-cron'); // Recommended for the auto-deletion logic

// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Fix for Chrome DevTools 404 and CSP error
// // app.get('/.well-known/appspecific/com.chrome.devtools.json', (req, res) => {
// //     res.sendStatus(204);
// // });

// // // AWS Configuration
// // const s3 = new AWS.S3({
// //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// //     region: process.env.AWS_REGION
// // });

// // const upload = multer({ storage: multer.memoryStorage() });

// // if (!process.env.MONGO_URI) {
// //     console.error('CRITICAL ERROR: MONGO_URI is not defined. Check your .env file location.');
// // }

// // // MongoDB Connection
// // mongoose.connect(process.env.MONGO_URI)
// //     .then(() => console.log('MongoDB Connected'))
// //     .catch(err => console.log('MongoDB Connection Error:', err));

// // // --- SCHEMA ---
// // const SpecialSchema = new mongoose.Schema({
// //     title: { type: String, required: true },
// //     description: { type: String, required: true },
// //     imageLink: { type: String, required: true }, // S3 URL
// //     validUpTo: { type: Date, required: true },
// // }, { timestamps: true }); // Includes createdAt and updatedAt

// // const Special = mongoose.model('Special', SpecialSchema);

// // // --- AUTO-DELETION LOGIC ---
// // // This runs every day at midnight to permanently delete items 
// // // where the current date is > (validUpTo + 2 days).
// // cron.schedule('0 0 * * *', async () => {
// //     try {
// //         const twoDaysAgo = new Date();
// //         twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

// //         const expiredItems = await Special.find({ validUpTo: { $lt: twoDaysAgo } });
        
// //         for (const item of expiredItems) {
// //             // Optional: Add logic here to delete the object from S3 using s3.deleteObject
// //             await Special.findByIdAndDelete(item._id);
// //         }
// //         console.log(`Cleanup complete: ${expiredItems.length} expired specials removed.`);
// //     } catch (err) {
// //         console.error('Auto-deletion task failed:', err);
// //     }
// // });

// // // --- ROUTES ---

// // // 1. GET Active Specials
// // // Fetches items where validUpTo is today or in the future.
// // app.get('/api/specials', async (req, res) => {
// //     try {
// //         const today = new Date();
// //         // Only fetch items that haven't expired yet
// //         const specials = await Special.find({
// //             validUpTo: { $gte: today }
// //         }).sort({ createdAt: -1 });

// //         res.json(specials);
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // });

// // // 2. POST New Special
// // app.post('/api/specials', upload.single('image'), async (req, res) => {
// //     const adminSecret = req.headers['x-admin-secret'];
// //     if (adminSecret !== process.env.ADMIN_SECRET) {
// //         return res.status(403).json({ error: "Unauthorized" });
// //     }

// //     if (!req.file) return res.status(400).json({ error: "Image required" });

// //     try {
// //         const { title, description, validUpTo } = req.body;

// //         const params = {
// //             Bucket: process.env.AWS_BUCKET_NAME,
// //             Key: `specials/${Date.now()}_${req.file.originalname}`,
// //             Body: req.file.buffer,
// //             ContentType: req.file.mimetype,
// //         };

// //         const uploadResult = await s3.upload(params).promise();

// //         const newSpecial = new Special({
// //             title,
// //             description,
// //             imageLink: uploadResult.Location,
// //             validUpTo: new Date(validUpTo)
// //         });

// //         await newSpecial.save();
// //         res.status(201).json(newSpecial);
// //     } catch (err) {
// //         res.status(500).json({ error: err.message });
// //     }
// // });

// // // Standard DELETE and PUT routes remain as previously defined...

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const specialRoutes = require('./routes/specialRoutes');
// const cron = require('node-cron');
// const Special = require('./models/Special');
// const { s3 } = require('./config/s3');
// const { DeleteObjectCommand } = require("@aws-sdk/client-s3");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/specials', specialRoutes);

// // --- AUTO-DELETION LOGIC ---
// // This runs every day at midnight to permanently delete items 
// // where the current date is > (validUpTo + 2 days).
// cron.schedule('0 0 * * *', async () => {
//   try {
//     const twoDaysAgo = new Date();
//     twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

//     const expiredItems = await Special.find({ validUpTo: { $lt: twoDaysAgo } });
    
//     for (const item of expiredItems) {
//       if (item.s3Key) {
//         const deleteParams = {
//           Bucket: process.env.AWS_BUCKET_NAME,
//           Key: item.s3Key,
//         };
//         try {
//           await s3.send(new DeleteObjectCommand(deleteParams));
//         } catch (s3Err) {
//           console.error("S3 Deletion Error (Cron):", s3Err);
//         }
//       }
//       await Special.findByIdAndDelete(item._id);
//     }
//     if (expiredItems.length > 0) {
//       console.log(`Cleanup complete: ${expiredItems.length} expired specials removed.`);
//     }
//   } catch (err) {
//     console.error('Auto-deletion task failed:', err);
//   }
// });

// // Database & Server
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     const PORT = process.env.PORT || 5000;
//     app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
//   })
//   .catch(err => console.error('MongoDB connection error:', err));














const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const Special = require('./models/Special');
const sequelize = require('./config/db');
const { s3 } = require('./config/s3');
const { DeleteObjectCommand } = require("@aws-sdk/client-s3");
const specialRoutes = require('./routes/specialRoutes');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/specials', specialRoutes);

// --- AUTO-DELETION LOGIC ---
cron.schedule('0 0 * * *', async () => {
  try {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    const expiredItems = await Special.findAll({ where: { validUpTo: { [require('sequelize').Op.lt]: twoDaysAgo } } });

    for (const item of expiredItems) {
      if (item.s3Key) {
        try {
          await s3.send(new DeleteObjectCommand({ Bucket: process.env.AWS_BUCKET_NAME, Key: item.s3Key }));
        } catch (s3Err) {
          console.error("S3 Deletion Error (Cron):", s3Err);
        }
      }
      await item.destroy();
    }

    if (expiredItems.length > 0) console.log(`Cleanup complete: ${expiredItems.length} expired specials removed.`);
  } catch (err) {
    console.error('Auto-deletion task failed:', err);
  }
});

// Connect to PostgreSQL & start server
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // creates tables if they don't exist
    console.log('Connected to PostgreSQL');

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('PostgreSQL connection error:', err);
  }
})();