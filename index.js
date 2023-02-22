const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

async function on() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://sidukov:131100nik@cluster0.mnipxjj.mongodb.net/telegramLections?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => {
      console.log(`server start. PORT: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
on();
