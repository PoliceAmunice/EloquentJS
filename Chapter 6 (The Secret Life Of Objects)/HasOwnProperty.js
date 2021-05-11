/**
 * Task 4,
 * The goal is to call Object.prototype's method 'hasOwnProperty' for 'trickyObject', 
 * that also has the same called property.
 */

/**
 * The trickyObject
 * @property {boolean} hasOwnProperty – the prop, that blocks calling the method in a straight way
 * @property {string} color – value for tests
 */
const trickyObject = {
	hasOwnProperty: true,
	color: 'red'
}

// Var. 1
console.log(Object.prototype.hasOwnProperty.call(trickyObject, 'color'));

// Var. 2
{
	trickyObject.hasOwnProperty = Object.prototype.hasOwnProperty;
	
	console.log(trickyObject.hasOwnProperty('color'));
}
