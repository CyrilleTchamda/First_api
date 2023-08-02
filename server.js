const express = require("express");
const connectDB = require("./config/db"); 
const cors = require('cors');
const dotenv = require("dotenv").config();
const multer = require("multer");
const port = 5000;

// connexion à la DB
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes

// Upload Image

app.use('/profile', express.static('upload/images'));


function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: 0,
            message: err.message
        })
    }
}
app.use(errHandler);

//revue
app.use('/api/revue', require("./routes/revue.routes"));

//tv
app.use('/api/tv', require("./routes/tv.routes"));

//user
app.use('/api/user', require("./routes/user.routes"));

// lancer le serveur
app.listen(port, ()=>console.log(`serveur démarré au port ${port}`))