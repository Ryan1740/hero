class Fly {
    constructor(bodyA,pointB) {
        var option ={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB=pointB
        this.rope=Constraint.create(option);
        World.add(world,this.rope)
    }
    attach(body) {
        this.rope.bodyA = body
    }
    fly() {
        this.rope.bodyA = null
    }

    display() {
        if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position
            var pointB = this.pointB
            line(pointB.x,pointB.y,pointA.x,pointA.y)
        }
    } 
}