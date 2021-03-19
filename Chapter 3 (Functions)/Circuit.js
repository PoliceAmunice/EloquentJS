/*
	"Замыкание - функция, которая 
	ссылается на переменные из 
	окружающих её локальных областей
	видимости."
*/

function multiplier(factor) {
	return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));