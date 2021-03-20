/**
 * Алгоритм сдаётся на чётных значениях grid. 
 * Нужно придумать условие смещения или что-то ещё, 
 * но уже надоело.
 * 
 * В любом случае, задачку стоит решать через двойной цикл.
 */

let chessGrid = drawGrid(7, '@', ' ');

console.log(chessGrid)


function drawGrid(size, ch1, ch2) {
	let grid = '', len = 0, cond = size**2;

	while (++len <= cond) {
	
		if (len % size == 0)
			grid += (len % 2 == 0)? `${ch1}\n` : `${ch2}\n`;
		else 
			grid += (len % 2 == 0)? ch1 : ch2;
	}
	return grid;
}