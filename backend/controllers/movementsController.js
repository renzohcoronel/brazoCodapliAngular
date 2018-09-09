var socket = require('./../socket').io();
var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi({ enableSoftPwm: true })
});

var degree_servo_elbow = 90; // eje z
var degree_servo_shoulder = 90;
var degree_servo_waist = 90; // rotar sobre si mismo
var degree_pincer = 90; // mano


var servo_elbow_pin = 'P1-35';
var servo_waist_pin = 'P1-38';
var servo_shoulder_pin = 'P1-36';
var pincer_pin = 'P1-37';

var servo_elbow;
var servo_shoulder;
var servo_waist;
var pincer;

board.on("ready", function () {
    servo_elbow = new five.Servo({
        pin: servo_elbow_pin,
        fps: 500,
        range: [0,180],
        deviceRange: [0,180],
        pwmRange: [640, 2300],
        startAt : degree_servo_elbow
    });
    servo_shoulder = new five.Servo({
        pin: servo_shoulder_pin,
        fps: 500,
        startAt : degree_servo_shoulder,
        deviceRange: [0,180],
        pwmRange: [640, 2300],
    });


    servo_waist = new five.Servo({
        pin: servo_waist_pin,
        fps: 500,
        startAt : degree_servo_waist,
        deviceRange: [0,180],
        pwmRange: [640, 2300],
    });

    pincer = new five.Servo({
        pin: pincer_pin,
        fps: 500,
        deviceRange: [0,180],
        pwmRange: [640, 2300],
    });


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

    // Doc http://johnny-five.io/api/servo/
});



exports.movementsxy = function (request, response) {

    const movement = request.body;
    const x = request.body.x;
    const y = request.body.y;
    const first_quadrant = 1;
    const second_quadrant = 2;
    const third_quadrant = 3;
    const fourth_quadrant = 4;
    const convert_to_degree = 57.2958;
    const hypotenuse = Math.sqrt((x * x) + (y * y));
    var quadrant;
    var arcos;
    var hexagesimal_degree;

    if (hypotenuse > 40) {

        if (x > 0 && y > 0) {
            quadrant = 1;
        }
        if (x < 0 && y > 0) {
            quadrant = 2;
        }
        if (x < 0 && y < 0) {
            quadrant = 3;
        }
        if (x > 0 && y < 0) {
            quadrant = 4;
        }
        arcos = Math.acos(x / hypotenuse) * convert_to_degree;
        hexagesimal_degree = Math.trunc(arcos);


        switch (quadrant) {
            case first_quadrant: {
                if (hexagesimal_degree >= 45 && hexagesimal_degree <= 90) {
                    console.log("Primer cuadrante ARRIBA");
                     // ###### shoulder - codo  #######
                     if (degree_servo_shoulder <= 180) {
                        degree_servo_shoulder++;
                    } else {
                        degree_servo_shoulder = 180;
                    }
                    servo_shoulder.to(degree_servo_shoulder);

                    printPositions();
                } else {
                    console.log("Primer cuadrante ABAJO");

                    // ###### waist - cintura  #######
                    if (degree_servo_waist <= 180) {
                        degree_servo_waist++;
                    } else {
                        degree_servo_waist = 180;
                    }
                    servo_waist.to(degree_servo_waist);
                    printPositions();
                }
                break;
            }

            case second_quadrant: {
                if (hexagesimal_degree > 90 && hexagesimal_degree <= 135) {
                    console.log("Segundo cuadrante ARRIBA")
                     // ###### shoulder - codo  #######
                     if (degree_servo_shoulder <= 180) {
                        degree_servo_shoulder++;
                    } else {
                        degree_servo_shoulder = 180;
                    }
                    servo_shoulder.to(degree_servo_shoulder);
                    printPositions();
                } else {
                    console.log("Segundo cuadrante ABAJO")

                    // ###### waist - cintura  #######
                    if (degree_servo_waist >= 0) {
                        degree_servo_waist--;
                    } else {
                        degree_servo_waist = 0;
                    }
                    servo_waist.to(degree_servo_waist);
                    printPositions();
                }
                break;
            }

            case third_quadrant: {
                if (hexagesimal_degree > 180 && hexagesimal_degree <= 225) {
                    console.log("Tercer cuadrante ARRIBA")

                    // ###### waist - cintura  #######
                    if (degree_servo_waist >= 0) {
                        degree_servo_waist--;
                    } else {
                        degree_servo_waist = 0;
                    }
                    servo_waist.to(degree_servo_waist);
                    printPositions();
                } else {
                    console.log("Tercer cuadrante ABAJO")
                     // ###### shoulder - codo  #######
                     if (degree_servo_shoulder >=0) {
                        degree_servo_shoulder--;
                    } else {
                        degree_servo_shoulder = 0;
                    }
                    servo_shoulder.to(degree_servo_shoulder);
                    printPositions();
                }
                break;
            }

            case fourth_quadrant: {
                if (hexagesimal_degree > 270 && hexagesimal_degree <= 315) {
                    console.log("Cuarto cuadrante ABAJO")
                      // ###### shoulder - codo  #######
                      if (degree_servo_shoulder >= 0) {
                        degree_servo_shoulder--;
                    } else {
                        degree_servo_shoulder = 0;
                    }
                    servo_shoulder.to(degree_servo_shoulder);
                    printPositions();
                } else {
                    console.log("Cuarto cuadrante ARRIBA")

                    // ###### waist - cintura  #######
                    if (degree_servo_waist <= 180) {
                        degree_servo_waist++;
                    } else {
                        degree_servo_waist = 180;
                    }
                    servo_waist.to(degree_servo_waist);

                    printPositions();
                }
                break;
            }
        }

    }

    console.log("[Movements xy] ", movement);
    response.send();
}

exports.movementsz = function (request, response) {
    const movement = request.body;
    console.log("[Movements z] ", movement, degree_servo_elbow);
    // ###### elbow - Hombre  #######
    if (movement.z >= 0 && movement.z <= 180) {
        degree_servo_elbow = movement.z;
        servo_elbow.to(degree_servo_elbow);

    }
    printPositions();

    response.send();
}

exports.pincers_close = function (request, response) {

    if (degree_pincer >= 0) {
        degree_pincer--;
        pincer.to(degree_pincer);

    } else {
        degree_pincer = 0;
    }
    console.log("[Movements Pincer] ", degree_pincer);
    response.send();
}

exports.pincers_open = async function (request, response) {

    if (degree_pincer <= 120) {
        degree_pincer++;
        pincer.to(degree_pincer);

    } else {
        degree_pincer = 120;
    }
    console.log("[Movements Pincer] ", degree_pincer);


    response.send();

}


function printPositions() {
    console.log("Waist:", degree_servo_waist, " Elbow:", degree_servo_elbow, " Shoulder:", degree_servo_shoulder, " Pincer:", degree_pincer);
}






