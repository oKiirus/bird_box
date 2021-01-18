class Log {
    constructor(x,y,height, angle){
        var box_options = {
            restitution:0.2,
            friction: 1,
            density: 1.3
        }
        this.body = Bodies.rectangle(x,y,20,height,box_options) 
        this.width = 20
        this.height = height
        Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("lime")
        rectMode(CENTER)
        rect(0,0,this.width,this.height) 
        pop()
        
    }
}