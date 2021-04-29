/**
 * Array.every и Array.some – методы для проверки соответствия каждого элемента
 * предиктаной функции. Результатом выполнения является одно значение (true/false).
 * 
 * Метод every остановится на первом false, аналогичен выражению "true && false && true => false".
 * 
 * Метод some остановится на первом true, аналогичен выражению "false || false || true => true".
 * 
 * Array.some( (value, index, arr) => ...)
 */

let arr = [...Array(10).keys()];
let isOdd;

let arrOdd = arr.filter(el => (el%2 == 0));

isOdd = every(arrOdd, el => (el%2 == 0));
console.log(arrOdd, isOdd);

isOdd = everySome(arrOdd, el => (el%2 == 0));
console.log(arrOdd, isOdd);



function every(arr, predicat) {
	for (let el of arr) {
		if (!predicat(el))
			return false
	}
	return true
}

function everySome(arr, predicat) {
	let result = arr.some( el => predicat(el));
	return !result;
}