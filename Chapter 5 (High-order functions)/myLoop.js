
let x = 0;

loop(0, (i) => i<10, (i) => ++i, (i) => {
	if (i%2==0)
		return x += i
});

console.log(x)

function loop(value, cond, update, action) {
	let fresh = value;
	while(cond(fresh)) {
		action(fresh);
		fresh = update(fresh);
	}
}