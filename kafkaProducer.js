// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const create = require('./logic.js');
let sale = create.sale()
setTimeout(printme, 1000)
function printme(){
  console.log(sale);
}

// const Kafka = require("node-rdkafka");


// const kafkaConf = {
//   "group.id": "cloudkarafka-example",
//   "metadata.broker.list": "dory-01.srvs.cloudkafka.com:9094,dory-02.srvs.cloudkafka.com:9094,dory-03.srvs.cloudkafka.com:9094".split(","),
//   "socket.keepalive.enable": true,
//   "security.protocol": "SASL_SSL",
//   "sasl.mechanisms": "SCRAM-SHA-256",
//   "sasl.username": "ee2dx8wc",
//   "sasl.password": "KxLA0Fa8_H_VH_lSAw21bhD4bGqqUp9V",
//   "debug": "generic,broker,security"
// };

// const prefix = 'ee2dx8wc-';
// const topic = `${prefix}default`;
// const producer = new Kafka.Producer(kafkaConf);
// const maxMessages = 20;

// const genMessage = new Buffer/(`{"id":1, "message":"hi"}`);

// producer.on("ready", function(arg) {
//   console.log(`producer ${arg.name} ready.`);
//   for (var i = 0; i < maxMessages; i++) {
//     producer.produce(topic, -1, genMessage(i), i);
//   }
//   setTimeout(() => producer.disconnect(), 0);
// });

// producer.on("disconnected", function(arg) {
//   process.exit();
// });

// producer.on('event.error', function(err) {
//   console.error(err);
//   process.exit(1);
// });
// // producer.on('event.log', function(log) {
// //   console.log(log);
// // });
// producer.connect();