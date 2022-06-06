// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "category",
      },
    },
    stock: {
      default_Value: 10,
      allow_Null: false,
      type: DataTypes.INTEGER,
      Validate: {
        is_Numeric: true,
      },
    },
    price: {
      allow_Null: false,
      type: DataTypes.DECIMAL,
      validate: {
        is_Decimal: true,
      },
    },
    product_name: {
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
    modelName: "product",
  }
);

module.exports = Product;
