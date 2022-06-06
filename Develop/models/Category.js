const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    category_name: {
        allow_Null: false,
        type: DataTypes.STRING,
      },
      id: {
        auto_Increment: true,
        primary_Key: true,
        allow_Null: false,
        type: DataTypes.INTEGER,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;