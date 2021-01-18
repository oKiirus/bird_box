class Ground {
    constructor(x,y,width,height){
        var ground_options = {
            isStatic : 1
        }
        this.body = Bodies.rectangle(x,y,width,height,ground_options) 
        this.width = width
        this.height = height
        this.x = this.body.position.x
        World.add(world,this.body)
    }
    display(){
        fill("brown")
        rectMode(CENTER)
        rect(this.x, this.body.position.y, this.width, this.height)
        
    }
}