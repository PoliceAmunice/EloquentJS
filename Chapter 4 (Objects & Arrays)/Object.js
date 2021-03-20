let journal = [];

function addEntry(events, squirrel) {
	journal.push({ events, squirrel });
}

addEntry(
	["работал", "трогал дерево", "ел пиццу", "бегал", "смотрел телевизор"],
	false
);

console.log(journal[0].events);