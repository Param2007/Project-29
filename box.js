class Box {

    constructor(x,y,width,height,color) {

        var options = {
            isStatic: false, restitution: 0.8, friction: 0, density: 0.5
        }

        this.width = width;
        this.height = height;

        this.color = color;

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);

    }

    display() {
        
        push();

        var p = this.body.position;

        translate(p.x, p.y);

        rotate(this.body.angle);

        fill(this.color);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);

        pop(); 
    }
}