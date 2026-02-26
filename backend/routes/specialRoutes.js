const express = require('express');
const router = express.Router();
const { upload } = require('../config/s3');
const { getSpecials, createSpecial, deleteSpecial } = require('../controllers/specialController');
const { protect } = require('../middleware/auth');

router.get('/', getSpecials);
router.post('/', protect, upload.single('image'), createSpecial);
router.delete('/:id', protect, deleteSpecial);

module.exports = router;