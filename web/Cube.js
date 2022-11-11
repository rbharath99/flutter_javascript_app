class Cube {
    constructor(a) {
        this.a = a;
    }

    calcArea() {
        return 6 * Math.pow(this.a, 2);
    }

    calcVolume() {
        return Math.pow(this.a, 3);
    }
}