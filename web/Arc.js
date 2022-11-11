class Arc{
    constructor(degree, radius) {
        this.degree = degree;
        this.radius = radius;
    }

    calcArcLength() {
        return this.radius * this.degree;
    }

    calcArea() {
        return (Math.pow(this.radius, 2) * this.degree) / 2;
    }
}