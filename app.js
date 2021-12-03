const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//Publisher
eventEmitter.on('start', () => {
    console.log('started');
})

//Subcribe
eventEmitter.emit('start');