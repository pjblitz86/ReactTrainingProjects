const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

const app = express();

// 1 end point in graphql, schema then handles separate routes
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
