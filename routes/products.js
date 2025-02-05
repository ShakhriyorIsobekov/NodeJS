import { Router } from "express";
const router = Router();
router.get("/", (req, res) => {
  res.render("index", {
    title: "Boom Shop | Shah",
  });
});

router.get("/products", (req, res) => {
  res.render("products", {
    title: "Products | Shah",
    isProduct: true,
  });
});

router.get("/add", (req, res) => {
  res.render("add", {
    title: "Add | Shah",
    isAdd: true,
  });
});

export default router;
