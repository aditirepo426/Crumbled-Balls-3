class Rope {
    constructor (bodyA,pointB){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            restitution: 0.5,
            stiffness: 0.002,
            length: 50
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        World.add(world ,this.body);
        }

    fly (){
      this.body.bodyA = null;
    }

    display(){
        
        
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(10);
            stroke(255);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
        
    }
}