const SCRIPTS = require("./SCRIPTS");

console.log(textDirection('உரை "сясь", الله يحب الصبر "ЧТо?"'));



function textDirection(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction : 'none';
	}).filter(({direction}) => direction != 'none');

	let total = scripts.reduce((n, {count}) => n + count, 0);
	if (total == 0) return 'No scripts found';

	let primal = scripts.reduce((n, cur) => {
		return n = n.count > cur.count? n : cur
	})

	return `${Math.round(primal.count * 100 / total)}% ${primal.direction}`;
}

function countBy(items, groupDir) {
	let counts = [];
	for (let item of items) {
		let direction = groupDir(item);
		let known = counts.findIndex(c => c.direction == direction);
		if (known == -1)
			counts.push({direction, count: 1});
		else
			counts[known].count++;
	}
	return counts;
}

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		}))
		return script;
	}
	return null;
}