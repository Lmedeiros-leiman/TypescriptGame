
// a set of functions that render the game to a canvas. also handles resizing and some other stuff.

export class Engine {
   canvas : HTMLCanvasElement
   context : CanvasRenderingContext2D
   constructor(canvas : HTMLCanvasElement) {
      this.canvas = canvas
      this.context = canvas.getContext('2d') as CanvasRenderingContext2D

      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
   }
   
   public clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
   }
   public resizeCanvas(width : number, height : number) {
      this.canvas.width = width
      this.canvas.height = height
   }
   public addObject(object : any) {}
}