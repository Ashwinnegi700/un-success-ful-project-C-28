class Launcher{
constructor(body,point){
    var Option = {
        bodyA:body,
        pointB:point
    }
   this.launcher=Constraint.create(Option);
   World.add(world,this.launcher);
}
fly(){
    this.launcher.bodyA=null
}

   display(){
       if(this.launcher.bodyA){
        strokeWeight(4)
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,
         this.launcher.pointB.x,this.launcher.pointB.y);
       }
      
   }

}