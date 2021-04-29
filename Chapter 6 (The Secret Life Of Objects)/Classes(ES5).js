
class Rabbit {
	constructor(type) {
		this.type = type
	}

	speak(speach) {
		console.log(`${this.type} rabbit says: ${speach}`);
	}
}
Rabbit.prototype.color = 'white';

const madRabbit = new Rabbit('Mad');

madRabbit.speak("Madness is a new normal")

console.log(madRabbit.color);

// Используя class в выражении, переменной присваивается значение конструктора
const object = new class { getWord() {return 'Hi there!';} }; // Имя класса можно опустить
console.log(object.getWord());