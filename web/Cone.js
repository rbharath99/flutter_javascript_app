class Cone {
    constructor(radius, height, slantHeight) {
        this.radius = radius;
        this.height = height;
        this.slantHeight = slandHeight;
    }

    calcArea() {
        return Math.PI * this.radius * this.slantHeight;
    }

    calcVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height) / 3;
    }
}