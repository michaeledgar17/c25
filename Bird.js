class  Bird extends BaseClass {
    constructor(x, y) {
      
     super (x,y,50,50);// super constructor helps in inheriting properties from parent class
      this.image=loadImage("sprites/bird.png")
     
    };

    
    display(){
      
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      super.display();
     
    };
  };
  