let sharps = "";

for (let i = 0; i < 7; i++) {
	console.log(sharps += '#');
}

console.log('\n');

//second variation (becouse of the book's prompt)

sharps = "#######";

for (let i = 1; i <= sharps.length; i++) {
	console.log(sharps.slice(0, i) + "\n");
}