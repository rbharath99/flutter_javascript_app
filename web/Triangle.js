class Triangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return 0.5 * (this.width * this.height);
    }
}

window.Triangle = Triangle;