class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	
	plus(x2, y2) {
		return `${this.x + x2} ${this.y + y2}`;
	}
	minus(x2, y2) {
		return `${this.x - x2} ${this.y - y2}`;
	}

	get length() {
		return Math.sqrt(this.x**2 + this.y**2)
	}
}

const vector = new Vec(5, 2);

console.log(vector.length = 50);