const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./Schema/typeDefs")
const resolvers = require("./Schema/resolvers")

const mongoose = require("mongoose");
const session = require("express-session");

const app = express();

async function startServer() {

    const apolloServer = new ApolloServer({ typeDefs, resolvers })

    await apolloServer.start();
    apolloServer.applyMiddleware({ app })

    await mongoose
        .connect("mongodb+srv://maanush98:Maanush%401998@assignments.bxmywff.mongodb.net/ems?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB:", error);
        });

    // Start the server
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
}

app.use(session({ secret: "maanush", resave: true, saveUninitialized: true }));

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));


// Middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

startServer();