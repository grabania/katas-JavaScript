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

// Consider an array / list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array(true means present).
// For example,
// 	[true, true, true, false,
// 		true, true, true, true,
// 		true, false, true, false,
// 		true, false, false, true,
// 		true, true, true, true,
// 		false, false, true, true]
// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheeps) {
	return arrayOfSheeps.filter(Boolean).length;
}

var array1 = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true
];
console.log(countSheeps(array1));

// Grasshopper - Summation
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.
// For example:
// summation(2) -> 3
// 1 + 2
// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function(num) {
	let result = 0;
	for (let i = 1; i <= num; i++) {
		result += i;
	}
	return result;
};

console.log(summation(1));
console.log(summation(8));

// Complete the square sum function so that it squares each number
// passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

function squareSum(numbers) {
	return numbers.reduce(function(sum, n) {
		return n ** 2 + sum;
	}, 0);
}

console.log(squareSum([ 1, 2 ]));
console.log(squareSum([ 0, 3, 4, 5 ]));

// Square(n) Sum(shorter version)

function squareSum(numbers) {
	return numbers.reduce((sum, n) => sum + n ** 2, 0);
}

console.log(squareSum([ 1, 2 ]));
console.log(squareSum([ 0, 3, 4, 5 ]));

// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string / char),
// value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// 	Examples
// basicOp('+', 4, 7)         // Output: 11
// basicOp('-', 15, 18)       // Output: -3
// basicOp('*', 5, 5)         // Output: 25
// basicOp('/', 49, 7)        // Output: 7

function basicOp(operation, value1, value2) {
	return eval(value1 + operation + value2);
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));

// Century From Year
// The first century spans from the year 1 up to and including the year 100,
// The second - from the year 101 up to and including the year 200, etc.
// Task :
// Given a year, return the century it is in.
// Input, Output
// Examples::
// centuryFromYear(1705)  returns(18)
// centuryFromYear(1900)  returns(19)
// centuryFromYear(1601)  returns(17)
// centuryFromYear(2000)  returns(20)

function century(year) {
	var x = Math.floor(year / 100);
	if (year % 100 === 0) return x;
	else return x + 1;
}

console.log(century(1705), 'Testing for year 1705');
console.log(century(1900), 'Testing for year 1900');
console.log(century(1601), 'Testing for year 1601');
console.log(century(2000), 'Testing for year 2000');
console.log(century(89), 'Testing for year 89');
