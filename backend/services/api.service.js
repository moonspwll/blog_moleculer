const API = require("moleculer-web");

module.exports = {
  name: "api",
  mixins: [API],
  port: process.env.API_PORT || 3000,
  nodeID: "node-2",
  settings: {
      routes: [{path: "/api", whitelist: ["*.*"]}]
  }
//   actions: {
//     async registration(ctx) {
//       const user = await ctx.broker.call("registration.create", {
//         id: uuidv4(),
//         login: "moonspwll",
//         email: "alexey.kowalski@gmail.com",
//         password: "hello123",
//         date: Date.now(),
//       });
//       return ctx.broker.call("registration.count", { search: "moonspwll" });
//     },
//   },
};
