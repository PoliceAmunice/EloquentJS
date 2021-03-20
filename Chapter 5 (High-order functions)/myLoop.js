/**
 * С For фактически то же самое, что и с while, но из-за инита value в условии
 * выглядит намного лаконичнее. Оставил оба для наглядности.
 */

loop(3, n => n > 0, n => n - 1, console.log);

function loop(start, cond, update, action) {
	for (let value = start; cond(value); value = update(value)){
		action(value);
	}
}

// function loop(value, cond, update, action) {
// 	let fresh = value;
// 	while(cond(fresh)) {
// 		action(fresh);
// 		fresh = update(fresh);
// 	}
// }