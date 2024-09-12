import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/Product",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB connected");
  }
);
const userSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  category: String,
  creationDate: Date,
  expirationDate: Date,
  mrp: Number,
});
const users = new mongoose.model("users", userSchema);
// Routes
app.post("/AddProduct", (req, res) => {
  const { productName, category, creationDate, expirationDate, mrp } = req.body;
  const user = new users({
    productName: productName,
    category: category,
    creationDate: creationDate,
    expirationDate: expirationDate,
    mrp: mrp,
  });
  user.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Successfully Added" });
    }
  });
});
app.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    console.log(userdata);

    res.status(201).json(userdata);
  } catch (error) {
    res.status(422).json(error);
  }
});
app.listen(9002, () => {
  console.log("BE is started at port 9002");
});
