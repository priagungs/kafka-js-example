const kafka = require('kafka-node');
const kafkaClient = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
const consumer =  new kafka.Consumer(kafkaClient, [{topic: 'test'}]);

consumer.on('message', function(message) {
  console.log("Received message in consumer : " + JSON.stringify(message));
});