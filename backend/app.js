const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const connect = require("./connect");
const productRoute = require("./routes/productRoute");

app.use(express.json());
app.use(cors());

port = process.env.PORT || 5000;

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

app.use("/api/upload/images", express.static(path.join(__dirname, "upload/images")));

app.post("/api/upload", upload.single("product"), (req, res) => {
  res.status(200).json({
    success: 1,
    image_url: `http://localhost:${port}/api/upload/images/${req.file.filename}`,
  });
});

app.use("/api/product", productRoute);

app.get("/", (req, res) => {
  res.send("<h1>ECOMMERCES API ROUTES. CNINNMAKES-DEV</h1>");
});

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Alice Uyandı http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
