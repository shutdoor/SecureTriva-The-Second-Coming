const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const helmet = require("helmet");

dotenv.config();

// set up server

const app = express();
app.use(helmet());

const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));



app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);
// connect to mongoDB

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);


app.use("/", express.static("./build"));
app.use("/api/user", require("./routers/userRouter"));
app.use("/api/trivia", require("./routers/triviaRouter"));
