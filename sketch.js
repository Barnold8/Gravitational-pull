const gravity = 9.807; //Real gravity of the earth

const air_res = 0.1;

function setup() {
  createCanvas(400, 400);


  b_d = 50;

  ball1 = new Obj(width / 2 - b_d, height / 2 + 100, 10, 25); //These are the two objects, using my Obj class in my Grav.js file, can be seen under "sketch files"
  ball2 = new Obj(width / 2 + b_d, height / 2, 0.0025, 25);
}

function draw() {
  background(220);
  ball1.draw();
  ball2.draw();

  let g = G_Force(ball1, ball2, gravity); //g here isnt gravity but the gravitational pull between two objects

  write_D();  //function that writes the distance between two objects
  
  ball1.inact_force(g,ball2, air_res);
  ball2.inact_force(g,ball1, air_res);
  ball1.collision_detection(g,ball2);
  ball2.collision_detection(g,ball1);
  
  
  //console.log(g)
  
}


function write_D(){
  //this function writes the distance between the two masses
  let d = int(dist(ball1.vect.x, ball1.vect.y, ball2.vect.x, ball2.vect.y));
  push();
  text(nfc(`Distance between masses ${d}m`), width/2, 10);
  pop();
  
}

function G_Force(obj1, obj2, g, debug = false) {


  let d = dist(obj1.vect.x, obj1.vect.y, obj2.vect.x, obj2.vect.y); //distance between two objects
  
  
  if (debug) {

    console.log("| Object 1 and object 2 masses |",obj1.m, obj2.m,"| Distance |", dist(obj1.x, obj1.y, obj2.x, obj2.y),"| Gravitational force |", g * ((obj1.m * obj2.m) / d*d ));

    return
    
  } else {

    return g * ((obj1.m * obj2.m) / d*d ); //newtons formula F = g x (m x m) / r^2


  }
}