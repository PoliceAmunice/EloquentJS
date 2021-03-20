listToArray(arrayToList([1, 2, 3]))

let list = arrayToList([1, 2, 3])
console.log(nth(3, list));

function arrayToList(array) {
	let result = {
		value: array[0],
		rest: {
			value: array[1],
			rest: {
				value: array[2],
				rest: null
			}
		}
	}

	return result;
}

function listToArray(list) {
	let array = [];

	return fillArray(array, list);

	function fillArray(array, object) {
		array.push(object.value);

		if (object.rest == null) {
			return array;
		} else {
			return fillArray(array, object.rest);
		}
	}
}

function prepend(element, list) {
	return newList = {
		value: element,
		rest: list,
	}
}

function nth(position, list) {
	let k = 0;

	return searchElement(k, list);

	function searchElement(deep, object) {
		if (deep == position) {
			return (object) ? object.value : undefined;
		} else {
			return searchElement(++deep, object.rest);
		}
	}
}