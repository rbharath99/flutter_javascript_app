class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    calcArea() {
        return 2 * Math.PI * this.radius * this.height;
    }

    calcVolume() {
        return Math.PI * Math.pow(this.radius, 2) * this.height;
    }
}