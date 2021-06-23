/**
 * Выражение должно выбирать только числа "в стиле JS".
 * К ним относятся всякие ".5", "5." и прочие (конкретнее в массивах).
 * 
 * Если всё правильно, то консоль молчит, иначе ругается либо на
 * пропущенное соответствие, либо на неожиданное совпадение с не-
 * правильной строкой.
 */

 let number = /^[+-]?(\d+\.|\.?\d)\d*?(e[+-]?\d+)?$/i;

 let valids = ["1", "-1", "+15", "1.55", ".5",
					"5.", "1.3e2", "1E-4", "1e+12"]
 
 let invalids = ["1a", "+-1", "1.2.3", "1+1",
						"1e4.5", ".5.", "1f5", "."]
 
 // Tests:
 for (let str of valids)
 {
	 if (!number.test(str)) {
		 console.log(`Failed to match '${str}'`);
	 }
 }
 
 for (let str of invalids) {
	 if (number.test(str)) {
		 console.log(`Incorrectly accepted '${str}'`);
	 }
 }