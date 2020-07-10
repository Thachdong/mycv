require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cvRoutes = require("./routes/cv");

const app = express();

//Top middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Connect to mongodb
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => console.log("Mongodb connected")
);
//Routes
app.use("/cv", cvRoutes);
app.post("/secret_key", (req, res) => {
  const { key } = req.body;
  if (key === process.env.SECRET_KEY) {
    return res.status(200).json({
      Success: {
        message: "Key match",
        data: null,
      },
    });
  }
  return res.status(400).json({
    Error: {
      message: "Key not match",
      data: null,
    },
  });
});
//Catch 404 error
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 400;
  next(error);
});
//Error handler
app.use((error, req, res, next) => {
  const err = app.get("env") === "production" ? {} : error;
  const status = error.status || 500;
  res.status(status).json({
    Error: {
      message: err.message,
      data: null,
    },
  });
});
//App listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
