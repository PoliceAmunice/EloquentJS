
for (let event of journalEvents(journal)) {
	let correlation = phi(tableFor(event, journal));
	if (correlation > 0.1 || correlation < -0.1) {
		console.log(event + ':', correlation);
	}
}



function addEntry(events, squirrel) {
	journal.push({ events, squirrel });
}

function phi([n11, n10, n01, n00]) {
	return (
		(n11 * n00 - n10 * n01) /
		Math.sqrt(
			(n10 + n11) * (n00 + n01) *
			(n01 + n11) * (n00 + n10)
		)
	);
}

function tableFor(event, journal) {
	let table = [0, 0, 0, 0];

	for (let entry of journal) {
		let index = 0;
		if (entry.events.includes(event)) index += 1;
		if (entry.squirrel) index += 2;
		table[index]++;
	}
	return table;
}

function journalEvents(journal) {
	let events = [];

	for (let entry of journal) {
		for (let event of entry.events) {
			if (!events.includes(event)) {
				events.push(event);
			}
		}
	}
	return events;
}