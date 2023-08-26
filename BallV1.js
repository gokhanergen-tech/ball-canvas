class Ball {
    position = { x: 50, y: 50 }
    texture;
    velocity = 0.1;
    beforeVelcity=0.1;
    step = 1;
    slow = 5;
    direction = 1;
    currentMax = 50;
    stop=1;

    rotate=5;
    size=10;

    maxDistance=20;
    distance=0;

    shot=0;
    


    constructor(texture) {
        this.texture = texture;
        this.controls=new Controls();
    }

    draw(ctx) {
       
    
        ctx.save();
      
    

        ctx.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2, true);
        ctx.clip();
      
       
       
   
        ctx.drawImage(this.texture, this.position.x - this.size, this.position.y -this.size, this.size*2,this.size*2);
   
     
        ctx.restore();
       
       
    }

    update() {


      
        if (this.position.y > 250-this.size-this.distance) {
            this.direction = -1;
            this.position.y = 250-this.size-this.distance;
            this.velocity = (this.velocity/2)+this.velocity/8;
            /*if(Math.abs(this.velocity/2+this.velocity/4-0)<0.2){
                this.stop=0;
            }*/
            if(Math.abs(this.velocity/2+this.velocity/8-0)<0.2){
                this.stop=0;
            }
        }

        if(this.position.y<0){
            this.position.y=10;
            this.direction=1;
        }
          
    
        
        if(this.shot){
            if(this.currentMax>this.distance){
                if(this.size>4){
                    this.size-=0.05;
                    this.distance+=0.4;
                }
        
            }
             
        }

        if(this.controls.upDown){
            this.stop=1;
            this.velocity=3;
            this.direction=-1;
            this.shot=1;
            this.controls.upPress=false;
        }

        if(this.controls.rightPress){
            if(this.position.x+10>500)
              this.position.x=490;
            else{
                this.position.x+=1;
            }
        }

        if(this.controls.leftPress){
            if(this.position.x-10<0)
            this.position.x=10;
          else{
              this.position.x-=1;
          }
        }
        
        if (this.slow !== 0) {
            this.position.y += this.velocity * this.direction;
            this.slow--;
        } else {
            this.slow = 1;
         
        
            this.velocity = (this.velocity+0.2 * this.direction)*this.stop;

            if(this.velocity<0){
                this.direction=1;
            }
        

        
            this.beforeVelcity=this.velocity;
            
            this.position.y += this.velocity * this.direction;
        }

    
        
      


       



    }

}

