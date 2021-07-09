var Point = /** @class */ (function () {
    function Point(x, y) {
        // ? optional
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' ,y:' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
