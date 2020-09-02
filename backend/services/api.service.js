const API = require("moleculer-web");

module.exports = {
  name: "api",
  mixins: [API],
  port: process.env.API_PORT,
  path: "/api",
  nodeID: "node-2",
  actions: {
    test(ctx) {
      return `Api are working!`;
    },
  },
};
