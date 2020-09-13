class Slingshot {

    constructor(bodyA, pointB) {

        var options = {
            bodyA: bodyA, pointB: pointB, stiffness: 0.04, length: 3
        }

        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        
        World.add(world, this.slingshot);
    }

    fly() {
        this.slingshot.bodyA = null;
    }

    display() {

        if(this.slingshot.bodyA) {
            var p = this.slingshot.bodyA.position;

            push();

            strokeWeight(4);
            stroke("pink");
            line(p.x, p.y, this.pointB.x, this.pointB.y);
            
            pop();
        }

    }
}