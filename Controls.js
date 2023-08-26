class Controls {
    upDown = false;
    leftPress = false;
    rightPress = false;

    mouseDown=false;

    constructor() {
        
        document.onkeydown=(e)=>{
            const key = e.key;
       
            switch (key) {
                case "ArrowUp":
                    this.upDown = true;
                    break;
                case "ArrowLeft":
                    this.leftPress = true;
                    break;
                case "ArrowRight":
                    this.rightPress = true;
                    break;
            }
        }

        document.onkeyup=(e)=>{
            const key = e.key;
            switch (key) {
                case "ArrowUp":
                    this.upDown = false;
                    break;
                case "ArrowLeft":
                    this.leftPress = false;
                    break;
                case "ArrowRight":
                    this.rightPress = false;
                    break;
            }
        }
        
    }
}