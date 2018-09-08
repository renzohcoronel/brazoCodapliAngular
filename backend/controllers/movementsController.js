var socket = require('./../socket').io();
var five = require("johnny-five");
var Raspi = require("raspi-io");
var board = new five.Board({
    io: new Raspi({ enableSoftPwm: true })
});

var degree_servo_elbow = 45; // eje z
var degree_servo_shoulder = 45;
var degree_servo_waist = 45; // rotar sobre si mismo
var degree_pincer = 20; // mano


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
        range: [60, 150],
        startAt: degree_servo_elbow
    });

    servo_shoulder = new five.Servo({
        pin: servo_shoulder_pin,
        range: [45, 180],
        startAt: degree_servo_shoulder
    });

    servo_waist = new five.Servo({
        pin: servo_waist_pin,
        range: [0, 180],
        startAt: degree_servo_waist
    });

    pincer = new five.Servo({
        pin: pincer_pin,
        startAt: degree_pincer,
        range: [0, 180]
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

    if (hypotenuse > 25) {

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
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move: top-right");
                     // ###### shoulder - codo  #######
                     if (degree_servo_shoulder <= 180) {
                        degree_servo_shoulder++;
                        servo_shoulder.to(degree_servo_shoulder);
                    } else {
                        degree_servo_shoulder = 180;
                    }

                    printPositions();
                } else {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move: right-top");

                    // ###### waist - cintura  #######
                    if (degree_servo_waist <= 180) {
                        degree_servo_waist++;
                        servo_waist.to(degree_servo_waist);
                    } else {
                        degree_servo_waist = 180;
                    }
                    printPositions();
                }
                break;
            }

            case second_quadrant: {
                if (hexagesimal_degree > 90 && hexagesimal_degree <= 135) {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:top-left");
                     // ###### shoulder - codo  #######
                     if (degree_servo_shoulder <= 180) {
                        degree_servo_shoulder++;
                        servo_shoulder.to(degree_servo_shoulder);
                    } else {
                        degree_servo_shoulder = 180;
                    }

                    printPositions();
                } else {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:left-top");

                    // ###### waist - cintura  #######
                    if (degree_servo_waist >= 0) {
                        degree_servo_waist--;
                        servo_waist.to(degree_servo_waist);
                    } else {
                        degree_servo_waist = 0;
                    }
                    printPositions();
                }
                break;
            }

            case third_quadrant: {
                if (hexagesimal_degree > 180 && hexagesimal_degree <= 225) {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:left-bottom");

                    // ###### waist - cintura  #######
                    if (degree_servo_waist >= 0) {
                        degree_servo_waist--;
                        servo_waist.to(degree_servo_waist);
                    } else {
                        degree_servo_waist = 0;
                    }
                    printPositions();
                } else {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:bottom-left");
                     // ###### shoulder - codo  #######
                     if (degree_servo_shoulder <= 180) {
                        degree_servo_shoulder++;
                        servo_shoulder.to(degree_servo_shoulder);
                    } else {
                        degree_servo_shoulder = 45;
                    }
                    printPositions();
                }
                break;
            }

            case fourth_quadrant: {
                if (hexagesimal_degree > 270 && hexagesimal_degree <= 315) {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:bottom-right");
                      // ###### shoulder - codo  #######
                      if (degree_servo_shoulder <= 180) {
                        degree_servo_shoulder++;
                        servo_shoulder.to(degree_servo_shoulder);
                    } else {
                        degree_servo_shoulder = 45;
                    }
                    printPositions();
                } else {
                    console.log("The arm will move ", hexagesimal_degree, "degrees, and ", hypotenuse, "milimeters.");
                    console.log("Move:right-bottom");

                    // ###### waist - cintura  #######
                    if (degree_servo_waist <= 180) {
                        degree_servo_waist++;
                        servo_waist.to(degree_servo_waist);
                    } else {
                        degree_servo_waist = 180;
                    }

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
    if (movement.z >= 60 && movement.z <= 150) {
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






