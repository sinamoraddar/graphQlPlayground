const graphql = require("graphql");
const UserType = require("./user_type");
const { GraphQLObjectType } = graphql;

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
    },
  },
});

module.exports = RootQueryType;
