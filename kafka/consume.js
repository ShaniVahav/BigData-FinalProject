// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

var Kafka = require("node-rdkafka");


const kafkaConf = {
  "group.id": "cloudkarafka-example",
  "metadata.broker.list": "dory-01.srvs.cloudkafka.com:9094,dory-02.srvs.cloudkafka.com:9094,dory-03.srvs.cloudkafka.com:9094".split(","),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": "zwfewzi4",
  "sasl.password": "wQ-7Y1FaWQFDjts-v0JKdTfvONgzA8Vf",
  "debug": "generic,broker,security"
};

const prefix = 'zwfewzi4-';
const topics = [`${prefix}try`];
const consumer = new Kafka.KafkaConsumer(kafkaConf, {
  "auto.offset.reset": "beginning"
});
const numMessages = 5;
let counter = 0;
consumer.on("error", function(err) {
  console.error(err);
});
consumer.on("ready", function(arg) {
  console.log(`Consumer ready`);
  consumer.subscribe(topics);
  consumer.consume();
});
// consumer.on("data", function(m) {
//   counter++;
//   if (counter % numMessages === 0) {
//     console.log("calling commit");
//     consumer.commit(m);
//   }
//   console.log(m.value.toString());
// });
consumer.on("disconnected", function(arg) {
  process.exit();
});
consumer.on('event.error', function(err) {
  console.error(err);
  process.exit(1);
});
// consumer.on('event.log', function(log) {
//   console.log(log);
// });
consumer.connect();

setTimeout(function() {
  consumer.disconnect();
}, 300000);

module.exports = consumer;