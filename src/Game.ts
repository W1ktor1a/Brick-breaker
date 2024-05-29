import { Paddle } from "./Paddle";
import { Brick } from "./Brick";
import { Ball } from "./Ball";

export class Game {
    board: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    //Game board dimensions 
    gameBoardWidth = 500;
    gameBoardHeight = 500;
    paddle: Paddle;
    ball: Ball;

    brickArray: Brick[] = [];
    brickColumns = 12;
    brickRows = 3;
    brickHeight = 10;
    brickWidth = 25;
    brickX = 15;
    brickY = 45;
    brickCount = 0;

    constructor() { 
        this.board = document.getElementById("playField") as HTMLCanvasElement;
        this.context = this.board.getContext('2d');
        this.board.width = this.gameBoardWidth;
        this.board.height = this.gameBoardHeight;
        
        this.paddle = new Paddle( 
          this.gameBoardWidth / 10,
          this.gameBoardHeight / 50,
          10,
          this.gameBoardWidth / 2 - 50 / 2,
          this.gameBoardHeight - 25,
        )
        
         
        this.ball = new Ball( 
          10,
          10,
          3,
          -3,
          this.gameBoardWidth / 2,
          this.gameBoardHeight / 2,
          
        )

       
        console.log("ball:", this.ball)

        this.drawBricks();
        
        requestAnimationFrame(() => this.updateGame());
        document.addEventListener('keydown',(e) => this.movePaddle(e))
    }
    public updateGame(){
      requestAnimationFrame(() => this.updateGame())
      this.context?.clearRect(0, 0, this.gameBoardWidth, this.gameBoardHeight);
      
      this.context!.fillStyle = 'white';
        this.context!.fillRect(
            this.paddle.x,
            this.paddle.y,
            this.paddle.width,
            this.paddle.height
        )

        this.context!.fillStyle = 'orange';
        for (let index = 0; index < this.brickArray.length; index++) {
          let brick = this.brickArray[index];
          this.context!.fillRect(
            brick.x,
            brick.y,
            brick.width,
            brick.height

          )
          
        }

        this.context!.fillStyle = 'green';
        this.ball.x += this.ball.speedX;
        this.ball.y += this.ball.speedY;
        this.context!.fillRect(
            this.ball.x,
            this.ball.y,
            this.ball.width,
            this.ball.height
        )

        this.checkColision();

      
    }

    public movePaddle(e:KeyboardEvent) {
        if(e.code === 'ArrowLeft'){
            let nextx = this.paddle.x - this.paddle.speed;
            if(!this.outOfBoard(nextx)){
            this.paddle.x = nextx;
        }
      }
        else if(e.code === 'ArrowRight'){
          let nextx = this.paddle.x + this.paddle.speed;
          if(!this.outOfBoard(nextx)){
          this.paddle.x = nextx;
        }
      }
    }
    private outOfBoard(xPos: number): Boolean{
      return xPos < 0 || xPos + this.paddle.width > 500
    }

    private drawBricks () {
    
      this.brickArray = [];
      for (let column = 0; column < this.brickColumns; column++) {
        for (let row = 0; row < this.brickRows; row++) {
          let brick = new Brick(
            25,
            10,
            this.brickX + column * this.brickWidth + column * 10, 
            this.brickY + row * this.brickHeight + row * 10,
           );
         this.brickArray.push(brick) 
        
        }
        
      }
        this.brickCount = this.brickArray.length;
        console.log("funkcja wywołana")
     }
     
     public checkColision() {
      //checkColision with walls
      if(this.ball.x <= 0 || this.ball.x + this.ball.width >= this.gameBoardWidth){
        this.ball.speedX *= -1;
      }
      if(this.ball.y <= 0){
        this.ball.speedY *= -1;
      }
      if(
        this.ball.x < this.paddle.x + this.paddle.width && 
        this.ball.x + this.ball.width > this.paddle.x &&
        this.ball.y < this.paddle.y + this.paddle.height &&
        this.ball.y + this.ball.height > this.paddle.y 

      ){
        this.ball.speedY *= -1;
      }
     }

}



