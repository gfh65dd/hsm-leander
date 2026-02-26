//  const mongoose = require('mongoose');

// const specialSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   imageLink: { type: String, required: true },
//   s3Key: { type: String, required: true }, // Important for deletions
//   validUpTo: { type: Date, required: true },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Special', specialSchema);







const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Special = sequelize.define('Special', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  imageLink: { type: DataTypes.STRING, allowNull: false },
  s3Key: { type: DataTypes.STRING, allowNull: false },
  validUpTo: { type: DataTypes.DATE, allowNull: false },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, {
  tableName: 'specials',
  timestamps: false
});

module.exports = Special;