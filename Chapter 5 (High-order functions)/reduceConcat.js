'use strict';

/*
	arr[].reduce(counter = arr[index], el = arr[index + 1], index)
	Свёрстка, сворачивает исходный массив (/объект) в одно значение
*/

let arr1 = [0,2,4,6,8];
let arr2 = [1,3,5,7,9];
let arrs = [arr1, arr2];

let arrReduced = arrs.reduce( (arr1, arr2) => arr1.concat(arr2));