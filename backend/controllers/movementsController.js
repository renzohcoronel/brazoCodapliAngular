var socket = require('./../socket').io();
var five = require("johnny-five");
var board = new five.Board();

var degree_serv1 = 0;
var degree_serv2 = 0;
var degree_serv3 = 0;
var degree_serv4 = 0;

var serv1 = 0;
var serv2 = 0;
var serv3 = 0;
var serv4 = 0;

board.on("ready", function() {
  serv1 = new five.Servo(10);
  serv2 = new five.Servo(11);
  serv3 = new five.Servo(12);
  serv4 = new five.Servo(13);

  // Servo alternate constructor with options
  /*
  var servo = new five.Servo({
    id: "MyServo",     // User defined id
    pin: 10,           // Which pin is it attached to?
    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
    range: [0,180],    // Default: 0-180
    fps: 100,          // Used to calculate rate of movement between positions
    invert: false,     // Invert all specified positions
    startAt: 90,       // Immediately move to a degree
    center: true,      // overrides startAt if true and moves the servo to the center of the range
  });
  */

  // Add servo to REPL (optional)
  this.repl.inject({
    servo: servo
  });
   // Doc http://johnny-five.io/api/servo/
  servo.sweep();
});

// body json



exports.movementsxy = async function (request, response) {

    response.send("OK");
}

exports.movementsz = async function (request, response) {

    response.send("OK");
}

exports.pincers = async function (request, response) {

    response.send("OK");
}






//https://www.luisllamas.es/raspberry-pi-virtualbox/
// https://journalofthegeek.wordpress.com/2017/01/01/emulating-a-raspberry-pi-on-a-linux-computer/
// https://grantwinney.com/how-to-create-a-raspberry-pi-virtual-machine-vm-in-virtualbox/







