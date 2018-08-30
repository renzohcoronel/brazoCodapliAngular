var socket = require('./../socket').io();
// var five = require("johnny-five");
// var board = new five.Board();

var degree_servo_elbow= 0; // eje z
var degree_servo_shoulder = 0;
var degree_servo_waist = 0; // rotar sobre si mismo
var degree_pincer = 0; // mano


var servo_elbow = 2;
var servo_shoulder = 3;
var servo_waist = 4;
var pincer = 5;

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
// });



exports.movementsxy = function (request, response) {

    const movement = request.body;
    const x = request.body.x;
    const y = request.body.y;
    const first_quadrant= 1;
    const second_quadrant =2;
    const third_quadrant =3;
    const fourth_quadrant=4;
    const convert_to_degree=57.2958;
    const hypotenuse= Math.sqrt( (x*x)+(y*y) );
    var quadrant;
    var arcos;
    var hexagesimal_degree;

    if(hypotenuse>25){ 
           
            if(x>0 && y>0){
                quadrant= 1;
            }
            if(x<0 && y>0){
               quadrant=2;
            }
            if(x<0 && y<0){
                quadrant=3;
            }
            if(x>0 && y<0){
                quadrant=4;  
            }
        arcos=Math.acos( x/hypotenuse )*convert_to_degree;
        hexagesimal_degree=Math.trunc(arcos);

            
        switch (quadrant){
            case first_quadrant:{
                if(hexagesimal_degree>=45 && hexagesimal_degree<=90){
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move: top-right");
                } else{
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move: right-top"); 
                }
                break;
            }

            case second_quadrant:{
                if(hexagesimal_degree>90 && hexagesimal_degree<=135){
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:top-left");
                } else {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:left-top");
                }
                break;
            }

            case third_quadrant:{
                if(hexagesimal_degree>180 && hexagesimal_degree<=225){
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:left-bottom");
                } else {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:bottom-left");
                }
                break;
            }

            case fourth_quadrant:{
                if(hexagesimal_degree>270 && hexagesimal_degree<=315){
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:bottom-right");
                } else {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:right-bottom");
                }
                break;
            }
        }

    }

    console.log("[Movements xy] " , movement);
    response.send(); 
}

exports.movementsz = function (request, response) {
    const movement = request.body;
    console.log("[Movements z] " , movement);
    response.send();
}

exports.pincers_close = function (request, response) {
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







