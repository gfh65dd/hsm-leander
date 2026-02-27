const mongoose = require('mongoose');
require('dotenv').config();

// Adjust the path to your Special model if necessary
const Special = require('../models/Special');

const seedData = [
  {
    title: "Grand Opening Special",
    description: "Join us for our grand opening and get 50% off on all appetizers!",
    validUpTo: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
    imageLink: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    s3Key: "seed-key-1"
  },
  {
    title: "Family Feast Bundle",
    description: "2 Curries, 4 Naans, Rice, and Dessert for only $45.99",
    validUpTo: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
    imageLink: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    s3Key: "seed-key-2"
  },
  {
    title: "Lunch Buffet",
    description: "All you can eat lunch buffet every weekday from 11 AM to 3 PM.",
    validUpTo: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000), // 90 days from now
    imageLink: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
    s3Key: "seed-key-3"
  }
];

const seedDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/hsm-leander';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');

    await Special.deleteMany({});
    console.log('Cleared existing specials');

    await Special.insertMany(seedData);
    console.log('Seeded database with test specials');

    await mongoose.connection.close();
    console.log('Database connection closed');
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();