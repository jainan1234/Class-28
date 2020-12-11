class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA, // variable name : value given by user
            pointB: pointB, // variable name : value given by user
            stiffness: 0.04, //how strong the connection is
            length: 10
        }
        
        this.sling = Constraint.create(options)
        this.pointB = pointB
        World.add(world, this.sling)
    }
    
    fly() {
        this.sling.bodyA = null
    }

    
    display() {
        
        if(this.sling.bodyA){
          
          strokeWeight(4)
          line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y)

    }
  }
}