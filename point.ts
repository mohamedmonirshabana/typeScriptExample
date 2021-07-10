export class Point{
    constructor(private x?: number, private y?: number) {
        // ? optional
    }
    draw() {
        console.log('X: '+ this.x+ ' ,y:'+ this.y);
    }
}
