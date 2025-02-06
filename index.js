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

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// const startApp = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log(`Mongo Connected`);

//   } catch (err) {
//     console.log(err);
//   }
// };
// startApp();

// Could not connect to any servers in your MongoDB Atlas cluster. One common reason is that you're trying to access the database from an IP that isn't whitelisted. Make sure your current IP address is on your Atlas cluster's IP whitelist: https://www.mongodb.com/docs/atlas/security-whitelist/
