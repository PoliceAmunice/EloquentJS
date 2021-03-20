/*
	*Недописан т.к. х*й пойми
	*Что за задача такая..
	*(стр 103-104)
*/

let someArray = [0, 1, 2, 3, 4, 5];

reverseArrayInPlace(someArray);
console.log(someArray);

function reverseArray(array) {
	let result = [];

	for (let i = array.length - 1; i >= 0; i--) {
		result.push(array[i]);
	}

	return result;
}

function reverseArrayInPlace(array) {
	let pocket = [];
	let len = array.length;

	for (let i = 0; i < len; i++) {
		pocket.push(array.pop());
	}

	array = pocket;
	return array;
}