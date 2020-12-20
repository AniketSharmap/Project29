class Block 
{
    constructor(x, y, width, height) 
    {
        var options =
        {
            isStatic: false
        }
        this.block = Bodies.rectangle(x, y, width, height, options)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.block);
    }
    display()
    {
        var pos = this.block.position;
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
};