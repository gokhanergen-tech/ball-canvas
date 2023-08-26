const canvas=document.getElementById("canvas");

if(canvas.getContext){
    const ctx=canvas.getContext("2d");
    canvas.width=500;
    canvas.height=250;

    const texture=new Image();
    const goal=new Image();
    goal.src="./assets/goal.png"
    texture.src="./assets/ball.svg"
    
    const ball=new Ball(texture);
    const wall1=new Wall();
    const wall2=new Wall();

    let gameOptions={
       isStopped:false,
       score:0
    };
    const renderer=()=>{

        if(!gameOptions.isStopped){
            ctx.clearRect(0,0,canvas.width,canvas.height);
   
            ctx.drawImage(goal,0,0,canvas.width,canvas.height);
          
            gameOptions.score=[wall1,wall2].reduce((a,b)=>a.points+b.points);
           
            wall1.update();
            wall1.draw(ctx);
            wall2.update();
            wall2.draw(ctx);
            ball.update([wall1,wall2],gameOptions);
            ball.draw(ctx,gameOptions.score);
           
            window.requestAnimationFrame(renderer);
        }else{
            console.log(`Your score is ${wall1.points+wall2.points}`)
        }
   
  
    }

    texture.onload=()=>{
        renderer();
    }

 
  
}