class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }

    calcPerimeter() {
        return (this.height * 2) + (this.width * 2);
    }
}

window.Rectangle = Rectangle;