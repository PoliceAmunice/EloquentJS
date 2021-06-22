/**
 * Регулярно-выражательный гольф – игра, наподобие кодового гольфа.
 * Смысл заключается в написании наиболее краткого выражения,
 * решающего поставленную задачу. Получилось неплохо.
 * 
 * @func verify Ругается на некорректное выражение.
 */

verify(/ca[rt]/,
	["my car", "bad cats"],
	["camper", "high art"]);

verify(/pr?op/,
	["pop culture", "mad props"],
	["plop", "prrrop"]);

verify(/ferr(et|y|ari)\b/,
	["ferret", "ferry", "ferrari"],
	["ferrum", "transfer A"]);

verify(/\b\w*ious\b/,
	["how delicious", "spacious room"],
	["ruinous", "consciousness"]);

verify(/\s[.,:;]/,
	["bad punctuation ."],
	["escape the period"]);

verify(/\w{7}/,
	["Siebentausenddreihundertzweiundzwanzig"],
	["no", "three small words"]);

verify(/\b[^\We]+\b/i,
	["red platypus", "wobbling nest"],
	["earth bed", "learning ape", "BEET"]);

/**
 * В случае успеха консоль молчит,
 * иначе ругнётся на один из массивов.
 * 
 * @param {string} regexp Тестируемая регулярка.
 * @param {array} yes Строки с соответствиями.
 * @param {array} no Строки с несоответствиями.
 */
function verify(regexp, yes, no)
{
	for (let str of yes) if (!regexp.test(str)) {
		console.log(`Failure to match '${str}'`);
	}
	for (let str of no) if (regexp.test(str)) {
		console.log(`Unexpected match for '${str}'`);
	}
}