const express = require("express");
const connectDB = require("./config/db"); 
const cors = require('cors');
const dotenv = require("dotenv").config();
const port = 5000;

// connexion à la DB
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Routes

//revue
app.use('/api/revue', require("./routes/revue.routes"));

//tv
app.use('/api/tv', require("./routes/tv.routes"));

// lancer le serveur
app.listen(port, ()=>console.log(`serveur démarré au port ${port}`))