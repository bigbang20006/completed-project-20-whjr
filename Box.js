class Box
{
    constructor()
    {
        var goptions = {
            isStatic: true
        }
        this.body = Bodies.rectangle(200, 380, 400, 20, goptions);
        World.add(world, this.body);
    }
}

//display and properties pending


  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);