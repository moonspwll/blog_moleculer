module.exports = {
  namespace: "dev",
  nodeID: "node-1",
  logger: "Console",
  transporter: "NATS",
  serializer: "JSON",
  hotReload: true,
  started(broker) {
    console.log("Broker dev started with ", process.env.DB_NAME, process.env.DB_USER, process.env.DB_HOST, process.env.DB_PASS);
  },
};
