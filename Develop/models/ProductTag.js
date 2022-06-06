const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "tag",
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "product",
      },
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
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
