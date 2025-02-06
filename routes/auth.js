import { Router } from "express";
const router = Router();

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login | Shah",
    isLogin: true,
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register | Shah",
    isRegister: true,
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  const userData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  res.redirect("/");
});

export default router;
