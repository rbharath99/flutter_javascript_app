class Trapezoid {
    constructor(a, b, height) {
        this.a = a;
        this.b = b;
        this.height = height;
    }

    calcArea() {
        return (0.5 * (this.a + this.b)) * this.height;
    }
}

window.Trapezoid = Trapezoid;