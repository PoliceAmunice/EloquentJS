// function formatData(cows, chickens = 0) {

// 	return `${addNulls(cows)} cows \n${addNulls(chickens)} chickens`;

// 	function addNulls(animalNumber, numberWithNulles = '') {
// 		let end = (3 - String(animalNumber).length);

// 		if (end != 0) {
// 			for (let i = 0; i < end; i++) {
// 				numberWithNulles = '0' + numberWithNulles;
// 			}
// 			return numberWithNulles + animalNumber;

// 		} else {
// 			return animalNumber;
// 		}
// 	}
// }

// console.log(formatData(311, 222));

printFarmInventory(20, 101, 1);

function printFarmInventory(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} cows`);
	console.log(`${zeroPad(chickens, 3)} chickens`);
	console.log(`${zeroPad(pigs, 3)} pigs`);
}

function zeroPad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = 0 + string;
	}
	return string;
}