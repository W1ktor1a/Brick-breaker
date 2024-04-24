import { Brick } from "./Brick";
import { Paddle } from "./Paddle";


export class Game {
    board: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    //Game board dimensions 
    gameBoardWidth = 500;
    gameBoardHeight = 500;
    paddle: Paddle;
    brick: Brick;
   
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
        this.brick = new Brick(
          this.gameBoardWidth / 20,
          this.gameBoardHeight / 40,
          this.gameBoardWidth / 2 - 50 / 2,
          this.gameBoardHeight - 500,

        )
        

        
       
        requestAnimationFrame(() => this.updateGame());
       document.addEventListener("keydown", (e) => this.movePaddle(e) )
       
    }
    public updateGame(){
      requestAnimationFrame(() => this.updateGame());
      this.context?.clearRect(0, 0, this.gameBoardWidth, this.gameBoardHeight);
      this.context!.fillStyle = 'white';
      this.context!.fillRect(
          this.paddle.x,
          this.paddle.y,
          this.paddle.width,
          this.paddle.height
      )
     
      this.context!.fillStyle = 'green';
      this.context!.fillRect(
          this.brick.x,
          this.brick.y,
          this.brick.width,
          this.brick.height
      )
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
}



