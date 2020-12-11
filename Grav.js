class Obj {


  constructor(x, y, m, r) {


    //x = x position on canvas
    //y = y position on canvas
    //m = weight of object in KG
    //r = radius of object AKA ellipse 


    this.vect = createVector(x, y) //Using a vector for the angle function, it holds the x and y

    this.m = m; // mass of the object
    this.r = r; // radius of the circle, used in distance function and ellipse function

    this.velocity = 0; //current velocity of object, can be changed at will
    this.bounds = 0.001; //bounds of angle to other object
  }

  draw() {

    ellipse(this.vect.x, this.vect.y, this.r); //create circle

  }

  inact_force(a, other, res) { //A = gravitational pull between the two objects based on newtons law
    //console.log(this.velocity, a);


    this.velocity += 0.001//a - res;


    if (this.vect.x == other.vect.x || this.vect.y == other.vect.y) {

      this.velocity *= -this.velocity;


    }


    if (this.vect.x < other.vect.x) {

      this.vect.x += this.velocity;


    } else if (this.vect.x > other.vect.x) {


      this.vect.x -= this.velocity;

    }


    if (this.vect.y < other.vect.y) {

      this.vect.y += this.velocity;


    } else if (this.vect.y > other.vect.y) {


      this.vect.y -= this.velocity;

    }


  }

  collision_detection(a, other) {

    let angle = this.vect.angleBetween(other.vect) //for determining the opposing energy reaction, this is here for the future since reverting the velocity to negative itself wont suffice for more accurate collisions
    
    
    let dx = this.vect.x - other.vect.x;
    let dy = this.vect.y - other.vect.y;
    let distance = Math.sqrt(dx*dx + dy*dy)
    
    if(distance < this.r + other.r - 20){ //20 is there because for some reason the math doesnt quite work our right for these
      
      //opposing energies
      this.velocity = -this.velocity;
      
    }

  }

}