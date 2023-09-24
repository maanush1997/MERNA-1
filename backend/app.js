const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

app.use(session({ secret: "maanush", resave: true, saveUninitialized: true }));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

mongoose
    .connect("mongodb+srv://maanush98:Maanush%401998@assignments.bxmywff.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

// Middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

// Start the server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});