// Для фильтрации исключений
class DirError extends Error {}

// Бросаем ошибку, если всё false
function promptDir(direction) {
	if (direction.toLowerCase() == 'left') 
		return 'L'
	if (direction.toLowerCase() == 'right') 
		return 'R'
	throw new DirError('Wrong direction: ' + direction)
}

// Пробуем исполнить код
try {
	// Косячим при вводе
	const dir = promptDir('what?')
	console.log(dir);
// Ловим ошибку
} catch (error) {
	// Проверяем не обознались ли
	if (error instanceof DirError)
		// Хорошо, если нет
		console.log(error + ' Try again?')
	else 
		// Если таки да, то взрываем программу и пропускаем ошибку до среды
		throw error
// Что бы ни случилось..
} finally {
	console.log('It was fine anyway..');
}