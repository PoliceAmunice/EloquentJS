class Group {
	constructor() {
		this._members = []
	}

	add(value) {
		if (this.has(value)) 
			return
		this._members.push(value)
	}

	delete(value) {
		this._members = this._members.filter(member => member !== value)
	}

	has(value) {
		return this._members.includes(value)
	}
	
	static from(collection) {
		const group = new Group;
		collection.forEach(element => group.add(element));
		return group;
	}
}

const group = Group.from([10, 20]);

console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));