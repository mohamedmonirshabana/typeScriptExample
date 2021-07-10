class Point{
    constructor(private x?: number, private y?: number) {
        // ? optional
    }
    draw() {
        console.log('X: '+ this.x+ ' ,y:'+ this.y);
    }
    get X() {
        return this.x;
    }

    set X(value) {
        if (value < 0)
            throw new Error("value cannot be less than 0");
        this.x = value;
    }

    get Y() {
        return this.y;
    }

    set Y(value) {
        if (value < 0)
            throw new Error("Value can not be less than 0");
        this.y = value;
    }
}

let point = new Point(1, 2);
let x = point.X;
point.X = 10;
point.Y = 20;
point.draw();