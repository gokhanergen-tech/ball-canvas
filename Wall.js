class Wall{

    size=Math.round(20+Math.random()*(200-20));
    thickness=Math.round(10+Math.random()*(20-10));
    position={x:500,y:250-this.size}
   
    speed=2;
    points=0;
    

    restart(){
        this.size=Math.round(20+Math.random()*(225-20));
        this.thickness=Math.round(10+Math.random()*(100-10));
        this.position={x:500,y:250-this.size}
        this.points++;
    }

    update(){
       this.position.x-=this.speed;
       if(this.position.x<-this.thickness){
         this.restart();
       }
    }

    draw(ctx){
      ctx.save();
       ctx.fillStyle="gray";
       ctx.fillRect(this.position.x,this.position.y,this.thickness,this.size);
      ctx.restore();
    }
}