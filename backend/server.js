require('dotenv').config();
const express = require("express");
const connectDB = require('./config/db');
const app = express()
const PORT = process.env.PORT || 3000;




//connexion db
connectDB();


// Midleware qui permet de traiter les données du Request

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use("/post", require("./routes/post.routes"))



app.listen(PORT, () => console.log("http://localhost:" + PORT));
