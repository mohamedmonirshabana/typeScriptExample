class Point{
    constructor(private x?: number, private y?: number) {
        // ? optional
    }
    draw() {
        console.log('X: '+ this.x+ ' ,y:'+ this.y);
    }
}

let point = new Point(1, 2);
point.draw();