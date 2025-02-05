// express js
import express from "express";
// express handlebars
import { create, engine } from "express-handlebars";
// routes
import AuthRoutes from "./routes/auth.js";
import ProductRoutes from "./routes/products.js";
// dotenv
import * as dotenv from "dotenv";
// mongoose
import mongoose from "mongoose";
dotenv.config();

const app = express();
const hbs = create({ defaultLayout: "main", extname: "hbs" });

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
// for login and register forms
app.use(express.urlencoded({ extended: true }));
// static public`
app.use(express.static("public"));
// mongoose
app.use(express.json());

app.use(AuthRoutes);
app.use(ProductRoutes);

const url = process.env.MONGO_URI;
mongoose.connect(url);

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
