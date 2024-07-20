// const mongo = require("mongodb");
// const MongoClient = mongo.MongoClient;

// const connectionString = process.env.MONGO_URI;
// const client = new MongoClient(connectionString);

// let conn;

// try {
//   conn = await client.connect();
// } catch (error) {
//   console.error(error);
// }

// const db = conn.db("sample_trainning");

// module.exports = db;

const mongoose = require("mongoose");

const conn = () => {
  console.log(process.env.MONGO_URI);
  try {
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.once("open", () => {
      console.log("connected to mongodb");
    });
  } catch (error) {
    console.error(
      `something went wrong with connect to the database${error.message}`
    );
  }
};

module.exports = conn;
