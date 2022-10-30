// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

//*********************//
//   Create & Send    //
//*******************//
const create = require('./logic.js');
var Kafka = require('node-rdkafka');


let sale = ""
let cities = create.cities()
let holidays = create.holidays()
setTimeout(send, 1000)

function send() {

    const prefix = "ee2dx8wc-";
    const topic = `${prefix}default`;

    var producer = new Kafka.Producer({
        "group.id": "kafka",
        "metadata.broker.list": "dory-01.srvs.cloudkafka.com:9094,dory-02.srvs.cloudkafka.com:9094,dory-03.srvs.cloudkafka.com:9094".split(","),
        "socket.keepalive.enable": true,
        "security.protocol": "SASL_SSL",
        "sasl.mechanisms": "SCRAM-SHA-256",
        "sasl.username": "ee2dx8wc",
        "sasl.password": "FdwQahINPP-hPRNkFEZXtTWhAREbabmt",
        "debug": "generic,broker,security"
    });

    var genMessage = Buffer.from("");

    producer.on("ready", function (arg) {

        console.log('send sale to kafka ..');

        sale = create.sale(cities, holidays)
        genMessage = Buffer.from(sale);

        producer.produce(topic, -1, genMessage);
        setTimeout(() => producer.disconnect(), 0);
    })

    myLoop()

    var i = 0;
    function ready() {
        i++
        if (i < 50) myLoop();
        producer.connect()
    }

    function myLoop() {
        setTimeout(ready, 2000)
    }


    producer.on('event.error', function (err) {
        console.log("event.error")
        console.error(err);
        process.exit(1);
    });

   // producer.connect();
}