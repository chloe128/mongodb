require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const conn = require("./db/conn");
const fruitRoutes = require("./routes/fruits");
const Fruit = require("./models/fruit");
const starterFruits = require("./db/seed");
conn();

//view engine
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//middleware
app.use(express.json()); //req.body
app.use("/api/fruits", fruitRoutes);

//route
app.get("/", (req, res) => {
  res.send("home route");
});

app.get("/fruits/seed", async (req, res) => {
  try {
    await Fruit.deleteMany({});
    await Fruit.create(starterFruits);
    res.json(starterFruits);
  } catch (error) {
    console.log(`something went wrong loadng seed data ${error.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
