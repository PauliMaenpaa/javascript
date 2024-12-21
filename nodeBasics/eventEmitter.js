// import built in events module

const EventEmitter = require("events");

// create eventEmitter object from EventEmitter class

const eventEmitter = new EventEmitter();

// includes on and emit methods + many others

// use on method to create events. Parameters are event name and a callback function, that will be executed when event is trigged

eventEmitter.on("start", () => {
  console.log("started");
});

// use emit method, to trigger a specific event

eventEmitter.emit("start");

// its possible to pass args to event handler by passing them as additional args to emit method

eventEmitter.on("start_args", (num1, num2) => {
  console.log(`started, args: ${num1}, ${num2}`);
});

eventEmitter.emit("start_args", 1, 2);

/*

Other eventEmitter methods:

- once(): add a one-time listener
- removeListenter() / off(): remove an event lister from an event
- removeAllListeners(): remove all listeners for an event

*/
