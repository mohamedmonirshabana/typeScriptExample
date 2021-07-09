class Point{
    x: number;
    y: number;
    constructor(x?: number, y?: number) {
        // ? optional
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log('X: '+ this.x+ ' ,y:'+ this.y);
    }
    getDistance(another: Point) {
        // ...
    }
}

let point = new Point(1,2);
point.draw();