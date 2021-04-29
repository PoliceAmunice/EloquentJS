/**
 * Rabbit – объект-прототип, выступающий в роли хранилища свойств для 
 * всех дочерних объектов, которым он приходится прототипом.
 */

// Описание прототипа
const Rabbit = {

	speak(speach) {
		console.log(`${this.type} rabbit says: ${speach}`);
	}
}

// Жёстко указали прототип для нового объекта, т.е.
// создали новый объект на основе этого портотипа
const killerRabbit = Object.create(Rabbit)
 
// Описали специфичное своство нового объекта
killerRabbit.type = 'Killer';

// Магия
killerRabbit.speak("I'll figure it out") //=> Killer rabbit says: I'll figure it out

/**
 * У нового объекта такого свойства (метода) нет.
 * Если компилятор сталкивается с таким, начинает искать в прототипе,
 * затем в прототипе прототипа и т.д.
 */