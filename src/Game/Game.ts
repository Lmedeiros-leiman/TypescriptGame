import { Engine } from "../Engine/Engine";


export class Game {
   Engine : Engine
   constructor() {
      const canvas = document.getElementById('mainGame') as HTMLCanvasElement
      this.Engine = new Engine(canvas)
      //
      canvas.onresize = () => this.Engine.resizeCanvas(canvas.width, canvas.height)
      window.onresize = () => this.Engine.resizeCanvas(canvas.width, canvas.height)
   }
}