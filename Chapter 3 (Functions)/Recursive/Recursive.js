/*
	Рекурсивная функция - вызывающая
	сама себя. При правильной формули-
	ровке условия выхода из рекурсии
	может заменить цикл (лучше читае-
	мость кода). Однако такая реализа-
	ция в ~3 раза медленнее, чем вари-
	ант с циклом.
*/

function gradeNumber(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * gradeNumber(base, exponent - 1);
	}
}

console.log(gradeNumber(2, 8));

/*
	Далее моя жалка попытка против
	Крутого примера из учебника..
*/

// function brunchyTree(base, target) {
// 	let hold = 0;
// 	let history = "" + base;

// 	return brunch(hold, base, history);

// 	function brunch(hold, base, history) {
// 		if (base == target) {
// 			return history;
// 		} else if (base > target) {

// 			history += (base % 3 == 0) ? " / 3" : " - 5";

// 			base = hold;
// 			return brunch(hold, base + 5, history + " + 5");
// 		} else {
// 			hold = base;
// 			return brunch(hold, base * 3, history + " * 3");
// 		}
// 	}
// }

// console.log(brunchyTree(1, 8));

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, `(${history} + 5)`) ||
				find(current * 3, `(${history} * 3)`);
		}
	}

	return find(1, '1');
}

console.log(findSolution(12));

