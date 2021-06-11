class Iron {
    constructor(x, y) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, 100,80, options);
      this.width = 100;
      this.height = 80;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('black');
      fill('grey');
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  