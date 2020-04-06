// # Even or Odd
// # Create a function(or write a script in Shell) that takes
// #  an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
	if (number % 2 == 0) return 'Even';
	return 'Odd';
}

console.log(even_or_odd(2));
console.log(even_or_odd(0));
console.log(even_or_odd(7));
console.log(even_or_odd(1));

// Is your period late ?
// In this kata, we will make a function to test whether a period is late.
// Our function will take three parameters:
// last - The Date object with the date of the last period
// today - The Date object with the date of the check
// cycleLength - Integer representing the length of the cycle in days
// If the today is later from last than the cycleLength,
// the function should return true.
// We consider it to be late if the number of passed days
// is larger than the cycleLength.Otherwise return false.

function periodIsLate(last, today, cycleLength) {
	let days = Math.floor((today - last) / 86400000);
	console.log(days);
	if (days > cycleLength) {
		return true;
	} else {
		return false;
	}
}

console.log(periodIsLate((2016, 6, 13), (2016, 7, 16), 35));
console.log(periodIsLate((2016, 6, 13), (2016, 7, 16), 28));

// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a
// function that removes the first and last characters of a string. You're given one parameter,
// the original string.You don't have to worry with strings with less than two characters.

function removeChar(str) {
	return str.substring(1, str.length - 1);
}

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('place'));

// String repeat
// Write a function called repeatString which repeats the given String src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
	return s.repeat(n);
}

console.log(repeatStr(3, '*'));
console.log(repeatStr(5, '#'));
console.log(repeatStr(2, 'ha '));
