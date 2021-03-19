function range(start, end, step = (end > start) ? 1 : -1) {
	let result = [];

	end += (end > start) ? 1 : -1;

	while (start != end) {
		result.push(start);
		start += step;
	}

	return result;
}

function sum(array) {
	let result = 0;

	for (let number of array) {
		result += number;
	}

	return result;
}