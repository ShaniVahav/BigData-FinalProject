const Kafka = require("node-rdkafka");

const kafkaConf = {
  "group.id": "cloudkarafka-example",
  "metadata.broker.list": "dory-01.srvs.cloudkafka.com:9094,dory-02.srvs.cloudkafka.com:9094,dory-03.srvs.cloudkafka.com:9094".split(","),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": "ee2dx8wc",
  "sasl.password": "KxLA0Fa8_H_VH_lSAw21bhD4bGqqUp9V",
  "debug": "generic,broker,security"
};


  const prefix = "ee2dx8wc-";
  const topic = `${prefix}new`;
  const producer = new Kafka.Producer(kafkaConf);
  //const maxMessages = 20;
 
var genMessage = Buffer("");
for(let i = 0; i<18; i++)
{
  producer.on("ready", function(arg) {
    console.log(`producer ready.`);
    genMessage = Buffer("id:"+i+", name:rivka");
    producer.produce(topic, -1, genMessage);
    setTimeout(() => producer.disconnect(), 0);
  });
}
producer.connect(); 
