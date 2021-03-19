let size = 8,
	isOdd = true,
	grid = '';

for (let i = 0; i < size; i++) {
	isOdd = (i % 2 != 0) ? true : false;

	for (let j = 0; j < size; j++) {
		grid = (isOdd) ? (grid += '#') : (grid += ' ');
		isOdd = !isOdd;
	}

	grid += '\n';
}

console.log(grid + '\n');