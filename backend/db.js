const mongoose = require("mongoose");

const url =
  "mongodb+srv://vedant:vedantjoshi@cluster0.4hbrgff.mongodb.net/query?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongodb connected successfully");
    })
    .catch((error) => console.log("error: ", error));
};
