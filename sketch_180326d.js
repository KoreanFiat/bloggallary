function setup() {
  size(600,600);
     frameRate(4);  
}

function draw() {
    background(255);
    stroke(255,255,0);
    
   for(int i=0 ; i<width/2; i+=2){
      line(width/2, height/2, i, random(height/2));
      line(width/2, height/2, i+width/2,random(height/2));
      line(width/2, height/2, i, height/2+random(height/2));
      line(width/2, height/2, i+width/2, height/2+ random(height/2));
     }
   
   
    strokeWeight(1);
    stroke(255,255,0);     
    fill(255,255,0);
    ellipse(width/2, height/2,200,200);
    
    fill(4,135,253);
    rect(0,height/2, 600,600);
    
  
  
}