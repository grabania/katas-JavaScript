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
