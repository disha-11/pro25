class paper{
    constructor(x,y){
   var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,20,options)
        World.add(world,this.body);
        this.image=loadImage("paper.png");
    }
    display(){
        
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle);
        imageMode (CENTER);
        image(this.image,0,0,80,80);
        pop ();
    }
}