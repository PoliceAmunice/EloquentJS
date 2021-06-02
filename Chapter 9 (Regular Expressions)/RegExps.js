// Комбинации с датой
function getDate(string) {
	const exp = /\b(\d{1,2})-(\d{1,2})-(\d{4})\b/
	let [_, month, day, year] = string.match(exp)
	return new Date(year, month - 1, day)
}
console.log(
	getDate("1-30-2003"), 
	"\n"
)

// Простая замена с использованием групп
const names = "Liskov, Barbara\nMcCartny, John\nWadler, Philip"

console.log(
	names.replace(/\b(\w+), (\w+)\b/g, "$2 $1"), 
	"\n"
);

// Сложная замена со своей функцией
const stock = "1 lemon, 2 cabbages, and 101 eggs"

function minusOne(match, amount, unit) {
	amount = Number(amount) - 1
	if (amount == 1) {
		unit = unit.slice(0, unit.length - 1)
	} else 
	if (amount == 0) {
		amount = "no"
	}

	return `${amount} ${unit}`
}

console.log(
	stock.replace(/(\d+) (\w+)/g, minusOne)
);