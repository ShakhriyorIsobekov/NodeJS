import { Router } from "express";
const router = Router();
// user
import User from "../models/User.js";
// bcrypt
import bcrypt from "bcrypt";

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login | Shah",
    isLogin: true,
    loginError: req.flash("loginError"),
  });
});

router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register | Shah",
    isRegister: true,
    registerError: req.flash("registerError"),
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    req.flash("loginError", "All fields are required");
    res.redirect("/login");
    return;
  }
  const existUser = await User.findOne({ email });
  if (!existUser) {
    req.flash("loginError", "User not found ");
    res.redirect("/login");
    return;
  }
  const isPasswordMatch = await bcrypt.compare(password, existUser.password);
  if (!isPasswordMatch) {
    req.flash("loginError", "Password is not found");
    req.redirect("/login");
    return;
  }
  res.redirect("/");
});

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    req.flash("registerError", "All fields are required");
    res.redirect("/register");
    return;
  }

  const candidate = await User.findOne({ email });
  if (candidate) {
    req.flash("registerError", "User already exists");
    res.redirect("/register");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const userData = {
    firstName,
    lastName,
    email,
    password: hashedPassword,
  };
  // const user = await User.create(userData);
  console.log(userData);
  console.log(hashedPassword);
  res.redirect("/");
});

export default router;
