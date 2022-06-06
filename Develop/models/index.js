// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Tag.belongsToMany(Product, { through: ProductTag, foreign_Key: "tag_id" });

Product.belongsToMany(Tag, { through: ProductTag, foreign_Key: "product_id" });

Category.hasMany(Product, {
  foreign_Key: "category_id",
});

Product.belongsTo(Category, {
  foreign_Key: "category_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};