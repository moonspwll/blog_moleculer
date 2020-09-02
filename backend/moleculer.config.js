module.exports = {
  namespace: "dev",
  nodeID: "node-1",
  logger: "Console",
  transporter: "NATS",
  serializer: "JSON",
  hotReload: true,
  started(broker) {
    console.log("Broker dev started!");
  },
};
