const router = require("express").Router();
const { Tag, Product } = require("../../models");

router.get("/", () => {
  Tag.findAll({
    include: {
      model: Product,
      attributes: ["category_id","stock","price","product_name"],
    },
})});

router.get("/:id", (req) => {
  Tag.findOne({
    where: { id: req.params.id },
    include: {
      model: Product,
      attributes: ["category_id","stock","price","product_name"],
    },
})});

router.post("/", (req) => {
  Tag.create({ tag_name: req.body.tag_name });
});

router.put("/:id", (req) => {
  Tag.update(req.body, {
    where: { id: req.params.id },
})});

router.delete("/:id", (req) => {
  Tag.destroy({
    where: { id: req.params.id },
})});

module.exports = router;
