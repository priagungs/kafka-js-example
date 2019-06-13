const kafka = require('kafka-node');
const kafkaClient = new kafka.KafkaClient({kafkaHost: '127.0.0.1:9092'});
const producer = new kafka.Producer(kafkaClient)

producer.on('ready', function() {
  setInterval(() => {
    producer.send([
      {topic: 'test', messages: 'hello'}
    ], () => console.log("Sent message from producer"));
  }, 1000);
});
