const express = require("express");
const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");

const app = express();

// Replace with your mongoLab URI
const mongoPassword = "wB0lxI86vLkMSVl3";
const mongoUserName = "sinamoraddar";
const MONGO_URI = `mongodb+srv://${mongoUserName}:${mongoPassword}@cluster0.syfzc.mongodb.net/<dbname>?retryWrites=true&w=majority`;

if (!MONGO_URI) {
  throw new Error("You must provide a MongoLab URI");
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("openUri", () => console.log("Connected to MongoLab instance."))
  .on("error", (error) => console.log("Error connecting to MongoLab:", error));

app.use(bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

const webpackMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");
const webpackConfig = require("../webpack.config.js");
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
