import express from "express";
import { create, engine } from "express-handlebars";
import AuthRoutes from "./routes/auth.js";
import ProductRoutes from "./routes/products.js";

const app = express();
const hbs = create({ defaultLayout: "main", extname: "hbs" });

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(AuthRoutes);
app.use(ProductRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
