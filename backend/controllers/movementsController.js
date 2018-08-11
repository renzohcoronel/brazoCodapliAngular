var socket = require('./../socket').io();
// var five = require("johnny-five");
// var board = new five.Board();

var degree_servo_elbow= 0; // eje z
var degree_servo_shoulder = 0;
var degree_servo_waist = 0; // rotar sobre si mismo
var degree_pincer = 0; // mano


var servo_elbow;
var servo_shoulder;
var servo_waist;
var pincer;

// board.on("ready", function() {
//   servo_elbow = new five.Servo(10);
//   servo_shoulder = new five.Servo(11);
//   servo_waist = new five.Servo(12);
//   pincer = new five.Servo(13);

//   // Servo alternate constructor with options
//   /*
//   var servo = new five.Servo({
//     id: "MyServo",     // User defined id
//     pin: 10,           // Which pin is it attached to?
//     type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
//     range: [0,180],    // Default: 0-180
//     fps: 100,          // Used to calculate rate of movement between positions
//     invert: false,     // Invert all specified positions
//     startAt: 90,       // Immediately move to a degree
//     center: true,      // overrides startAt if true and moves the servo to the center of the range
//   });
//   */

//   // Add servo to REPL (optional)
//   this.repl.inject({
//     servo: servo
//   });
//    // Doc http://johnny-five.io/api/servo/
//   servo.sweep();
// });



exports.movementsxy = async function (request, response) {

    const movement = request.body;
    console.log("[Movements xy] " , movement);
    response.send();
}

exports.movementsz = async function (request, response) {
    const movement = request.body;
    console.log("[Movements z] " , movement);
    response.send();
}

exports.pincers_close = async function (request, response) {
    degree_pincer--
    console.log("[Movements Pincer] " , degree_pincer);
    response.send();
  
}

exports.pincers_open = async function (request, response) {
  degree_pincer++;
  console.log("[Movements Pincer] " , degree_pincer);
  response.send();

}






//https://www.luisllamas.es/raspberry-pi-virtualbox/
// https://journalofthegeek.wordpress.com/2017/01/01/emulating-a-raspberry-pi-on-a-linux-computer/
// https://grantwinney.com/how-to-create-a-raspberry-pi-virtual-machine-vm-in-virtualbox/







