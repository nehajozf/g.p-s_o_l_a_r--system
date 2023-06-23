var speed;

function setup() {
    createCanvas(900, 700);
   
    //createCanvas(500, 500);
}

function draw() {
    background(0);
    speed = frameCount;

    
    //sun
    push();
    translate(width/2,height/2);
    rotate(radians(speed/3));  //sun rotation
    celestialObj(color(255,150,0), 200); 
    pop();
    
    
    //Earth
    push();
    translate(width/2,height/2);
    rotate(radians(speed));//earth around sun
    
    translate(width/4,height/4);
    
    earthObj(color(0,0,255), 80);//EARTH
     rotate(radians(speed));//earth rotate by itself
    pop();
    
    
    
    //Moon
    push();
    //follow sun to the centre
    translate(width/2,height/2);
    rotate(radians(speed)); //moon rotating around the sun's orbit
    
    //Translate from sun and rotate
    translate(width/4,height/4);
    rotate(radians(-speed*2)); //moon rotating around the earth's orbit
    
    //Translate from earth and rotate
    translate(width/8,height/8);
    moonObj(color(255,255,255), 30);
    pop();
   
    
    
    
    
    //Earth Satellite
    
    push();
    translate(width/2,height/2);//satellite around sun
    rotate(radians(speed));
    
    translate(width/4,height/4);//satellite around earth
    rotate(radians(-speed*5))
    
    translate(width/15,height/15);//moon not rotating
    earthSatellite(color(255,0,0), 20);
    pop();
    
    

    
    //Asteroid
    push();
    //follow sun to centre
    translate(width/2,height/2);
    rotate(radians(speed)); //asteroid roatating around the sun's orbit
    
    //Translate from sun and rotate
    translate(width/4,height/4);
    rotate(radians(-speed*2)); //asteroid rotating around the earth's orbit
    
    //Translate from earth and rotate
    translate(width/8,height/8);
    rotate(radians(-speed*2)); //asteroid rotating around the moon's orbit
    
    //Translate from the moon and rotate
    translate(width/22,height/22);
    moonAsteroid(color(255,0,255), 15);
    pop();

    
}

function celestialObj(c, size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}


function earthObj(c,size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
    
}

function moonObj(c,size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}

function earthSatellite(c,size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}

function moonAsteroid(c,size){
    strokeWeight(5);
    fill(c);
    stroke(0);
    ellipse(0, 0, size, size);
    line(0, 0, size/2, 0);
}


