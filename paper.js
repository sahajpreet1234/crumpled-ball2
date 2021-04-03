class Paper {
    constructor(x,y,radius) {
      var options = {
         restitution:0.6,
         friction:0.2,
         density:0.1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image=loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(RADIUS);
      fill("brown");
      image(this.image,pos.x, pos.y, this.radius, this.radius);
    }
  };
