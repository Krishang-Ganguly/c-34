class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            bodyB: pointB,
            stiffness: 0.5            
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   show(){
        
     
            var pos1 = this.chain.bodyA.position;
            var pos2 = this.chain.bodyB.position;
           
                strokeWeight(7);
                line(pos1.x , pos2.y, pos1.x , pos2.y);
               
    }
    
}