const mongoose = require('mongoose');

connectDB().catch(err => console.log(err));

async function connectDB() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connecté à Mongo !');

}

module.exports = connectDB;