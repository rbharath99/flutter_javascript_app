class Sphere {
    constructor(radius) {
        this.radius = radius;
    }

    calcArea() {
        return 4 * Math.PI * Math.pow(this.radius, 2);
    }

    calcVolume() {
        return (4 * Math.PI * Math.pow(this.radius, 3)) / 3;
    }
}