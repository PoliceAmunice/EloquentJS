function countBs(string, symbol) {
	let countChars = 0;

	for (let char of string) {
		// countChars += (char == 'B') ? 1 : 0;
		if (char == symbol) countChars++;
	}

	return `There's ${countChars} "${symbol}" in your string!`;
}

console.log(countBs("test", "4"));