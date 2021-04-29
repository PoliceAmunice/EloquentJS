/**
 * Map – класс, реализующий структуру данных для хранения связей ключ/значение.
 * При этом в качестве значений (без риска переопределения и пр.) можно использовать любой тип данных.
 */

const ages = new Map();

ages.set('John', 24)
ages.set('Tom', 18)
ages.set('April', 89)

console.log(ages.get('Tom'));
console.log(ages.has('John'));