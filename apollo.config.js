module.exports = {
  client: {
    includes: ["./src/**/*.tsx"],
    tagName: "gql",
    service: {
      name: "gober-eats-backend",
      url: "http://192.168.0.22:4000/graphql",
    },
  },
};
