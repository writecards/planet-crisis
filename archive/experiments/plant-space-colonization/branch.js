class Branch{
    constructor(parent, pos, dir){
        this.parent = parent;
        this.pos = pos;
        this.dir = dir;
    }

    next(){
        let nextPos = p5.Vector.add(this.pos, this.dir);
        let nextBranch = new Branch(this, nextPos, this.dir.copy());
        return nextBranch;  
    }

    show(){
        if(parent!=null){
            stroke(255);
            line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y)
        }
    }
}