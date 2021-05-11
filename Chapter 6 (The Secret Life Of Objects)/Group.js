/**
 * An array of unique props (analog for 'Set' function)
 * @module Group
 */
class Group {
	/**
	 * @property {Array} _members – an array of unique props
	 */
	constructor() {
		/** @private */
		this._members = []
	}

	/**
	 * Method will add an element to the group if it doesn't already exist in it
	 * @param {*} value input value to add
	 */
	add(value) {
		if (this.has(value)) 
			return
		this._members.push(value)
	}

	/**
	 * Method will delete an existing element of the group
	 * @param {*} value input value to delete
	 */
	delete(value) {
		this._members = this._members.filter(member => member !== value)
	}

	/**
	 * Check if the value exist
	 * @param {*} value input value to search in the group
	 * @returns true if group includes the value, false if it doesn't
	 */
	has(value) {
		return this._members.includes(value)
	}
	
	/**
	 * Set new group from some collection
	 * @static
	 * @param {Array} collection an array of elements to set into the new group
	 * @returns new group
	 */
	static from(collection) {
		const group = new Group;
		collection.forEach(element => group.add(element));
		return group;
	}

	// override default iterator
	[Symbol.iterator] = function() {
		return new GroupIterator(this);
	}
}
/**
 * Custom iterator, for training purposes
 * @module GroupIterator
 */
class GroupIterator {
	/**
	 * @param {Object} group iterable object
	 */
	constructor(group) {
		/** @private */
		this._members = Array.from(group._members);
	}

	/**
	 * Method to do on each iteration
	 * @returns {Object}
	 */
	next() {
		let value = this._members.shift();

		if (value === undefined) 
			return {done:true}

		return {value, done:false}
	}
}

const group = Group.from([10, 20, 30]);

console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

// My test
for (const iterator of group) {
	console.log(iterator);
}

// Test from the author
for (let value of Group.from(['a', 'b', 'c'])) {
	console.log(value);
}