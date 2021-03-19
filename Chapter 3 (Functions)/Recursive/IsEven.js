function isEven(number) {
	// number = (number < 0) ? -number : number;
	if (number < 0) {
		number = -number;
	}

	return check(number);

	function check(number) {
		if (number == 0) {
			return true;
		} else if (number == 1) {
			return false;
		} else {
			return check(number - 2);
		}
	}
}

console.log(isEven(-2));