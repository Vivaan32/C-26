class Rope {
    constructor(bodyA, pointB) {
        var options= {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 200
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display() {
        if(this.rope.bodyA) {
            var a = this.rope.bodyA.position;
            var b = this.pointB;
            push()
            fill("black")
            strokeWeight(3)
            line(a.x, a.y, b.x, b.y);
            pop()
        }
    }
}