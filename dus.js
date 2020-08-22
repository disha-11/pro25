class dus{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)
       this.image=loadImage("dustbingreen.png");
       this. image.scale=0.02;
    }
    display(){
        push ();
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle);
        imageMode (CENTER)
        image(this.image,0,0,this.width,this.height);
        
        pop ();
    }
}