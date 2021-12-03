const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//Publisher
eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end} `);
})

//Subcribe
eventEmitter.emit('start', 1, 100);