const express = require("express");
const expressGraphQL = require("express-graphql");
const app = express();
const schema = require("./schema/schema");

const PORT = 4000;

app.use("/graphql", expressGraphQL({ graphiql: true, schema }));

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
