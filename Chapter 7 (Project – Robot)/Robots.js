const roads = [
	"Alice's House-Bob's House",   "Alice's House-Cabin",
	"Alice's House-Post Office",   "Bob's House-Town Hall",
	"Daria's House-Ernie's House", "Daria's House-Town Hall",
	"Ernie's House-Grete's House", "Grete's House-Farm",
	"Grete's House-Shop",          "Marketplace-Farm",
	"Marketplace-Post Office",     "Marketplace-Shop",
	"Marketplace-Town Hall",       "Shop-Town Hall"
];

function buildGraph(edges) {
	let graph = Object.create(null);

	function addEdge(from, to) {
		if (graph[from] == null) {
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}
	}

	for (let [from, to] of edges.map(road => road.split('-'))) {
		addEdge(from, to);
		addEdge(to, from);
	}

	return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
	constructor(place, parcels) {
		this.place = place;
		this.parcels = parcels;
	}
	
	move(destination) {
		if (!roadGraph[this.place].includes(destination)) {
			return this;
		} else {
			let parcels = this.parcels.map(p => {
				if (p.place != this.place)
					return p;
				return {place: destination, address: p.address};
			}).filter(p => p.place != p.address);
			
			return new VillageState(destination, parcels);
		}
	}
}

function runRobot(state, robot, memory) {
	for (let turn = 0;; turn++) {
		if (state.parcels.length == 0) {
			console.log(`Complete in ${turn} steps`);
			break;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
		console.log(`Moving to ${action.direction}`);
	}
}

function runTestRobot(state, robot, memory) {
	for (let turn = 0;; turn++) {
		if (state.parcels.length == 0) {
			return turn;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
	}
}

function randomPick(array) {
	let choice = Math.floor(Math.random() * array.length);
	return array[choice];
}

function randomRobot(state) {
	return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
	let parcels = [];
	for (let i = 0; i < parcelCount; i++) {
		let address = randomPick(Object.keys(roadGraph));
		let place;
		do {
			place = randomPick(Object.keys(roadGraph));
		} while (place == address);
		parcels.push({place, address});
	}
	return new VillageState("Post Office", parcels);
};

const mailRoute = [
	"Alice's House", "Cabin", "Alice's House", "Bob's House",
	"Town Hall", "Daria's House", "Ernie's House",
	"Grete's House", "Shop", "Grete's House", "Farm",
	"Marketplace", "Post Office"
];

function routeRobot(state, memory) {
	if (memory.length == 0) {
		memory = mailRoute;
	}
	return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
	let work = [{at: from, route: []}];
	for (let i = 0; i < work.length; i++) {
		console.log('work.length:>> ', work.length);
		let {at, route} = work[i];
		for (let place of graph[at]) {
			if (place == to) return route.concat(place);
			if (!work.some(w => w.at == place)) {
				work.push({at: place, route: route.concat(place)});
			}
		}
	}
}

function goalOrientedRobot({place, parcels}, route) {
	if (route.length == 0) {
		let parcel = parcels[0];
		if (parcel.place != place) {
			route = findRoute(roadGraph, place, parcel.place);
			console.log('a', route);
		} else {
			route = findRoute(roadGraph, place, parcel.address);
			console.log('b', route);
		}
	}
	return {direction: route[0], memory: route.slice(1)};
}

function compareRobots(robotA, memoryA, robotB, memoryB) {
	let interimA = [], interimB = [];
	for (let i = 0; i < 100; i++) {
		let state = VillageState.random();
		interimA.push(runTestRobot(state, robotA, memoryA));
		interimB.push(runTestRobot(state, robotB, memoryB));
	}
	let totalA = interimA.reduce( (prev, cur) => prev + cur);
	let totalB = interimB.reduce( (prev, cur) => prev + cur);
	return {
		'averageA': totalA / 100, 'totalA'  : totalA, 'interimA': interimA,
		'averageB': totalB / 100, 'totalB'  : totalB, 'interimB': interimB,
	}
}

const comparenment = compareRobots(routeRobot, [], goalOrientedRobot, [],)

console.log(comparenment);

// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), goalOrientedRobot, []);
// runRobot(VillageState.random(), routeRobot, []);