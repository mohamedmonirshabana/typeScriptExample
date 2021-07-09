class Point{
    constructor(private x?: number, private y?: number) {
        // ? optional
    }
    draw() {
        console.log('X: '+ this.x+ ' ,y:'+ this.y);
    }
    getX() {
        return this.x;
    }

    setX(value) {
        if (value < 0)
            throw new Error("value cannot be less than 0");
        this.x = value;
    }
}

let point = new Point(1, 2);
let x = point.getX();
point.setX(10);
point.draw();