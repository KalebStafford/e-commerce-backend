const router = require("express").Router();
const { Category, Product } = require("../../models");

router.get("/", () => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ["category_id","stock","price","product_name","id"],
    },
})});

router.get("/:id", (req) => {
  Category.findOne({
    where: { id: req.params.id },
    include: {
      model: Product,
      attributes: ["category_id","stock","price","product_name","id"],
    },
})});

router.post("/", (req) => {
  Category.create({
    category_name: req.body.category_name,
})});

router.put("/:id", (req) => {
  Category.update(req.body, {
    where: { id: req.params.id },
})});

router.delete("/:id", (req) => {
  Category.destroy({
    where: { id: req.params.id },
})});

module.exports = router;
