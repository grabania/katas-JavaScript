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

// Century From Year. Shorter version.

function century(year) {
	return Math.floor((year - 1) / 100) + 1;
}

console.log(century(1705), 'Testing for year 1705');
console.log(century(1900), 'Testing for year 1900');
console.log(century(1601), 'Testing for year 1601');
console.log(century(2000), 'Testing for year 2000');
console.log(century(89), 'Testing for year 89');

// Century From Year. The Shortest version.
function century(year) {
	return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}

console.log(century(1705), 'Testing for year 1705');
console.log(century(1900), 'Testing for year 1900');
console.log(century(1601), 'Testing for year 1601');
console.log(century(2000), 'Testing for year 2000');
console.log(century(89), 'Testing for year 89');

// Remove First and Last Character
// It's pretty straightforward. Your goal is to create a function that
// removes the first and last characters of a string. You're given one parameter,
// the original string.
// You don't have to worry with strings with less than two characters.

function removeChar(str) {
	return str.slice(1, -1);
}
console.log(removeChar('eloquent'), 'loquen');
console.log(removeChar('country'), 'ountr');
console.log(removeChar('place'), 'lac');
console.log(removeChar('person'), 'erso');

// A Needle in the Haystack
// Can you find the needle in the haystack ?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message(as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

var haystack_1 = [ '3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false ];
var haystack_2 = [
	'283497238987234',
	'a dog',
	'a cat',
	'some random junk',
	'a piece of hay',
	'needle',
	'something somebody lost a while ago'
];
var haystack_3 = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	8,
	7,
	5,
	4,
	3,
	4,
	5,
	6,
	67,
	5,
	5,
	3,
	3,
	4,
	2,
	34,
	234,
	23,
	4,
	234,
	324,
	324,
	'needle',
	1,
	2,
	3,
	4,
	5,
	5,
	6,
	5,
	4,
	32,
	3,
	45,
	54
];

function findNeedle(haystack) {
	return 'found the needle at position ' + haystack.indexOf('needle');
}

console.log(findNeedle(haystack_1), 'found the needle at position 3');
console.log(findNeedle(haystack_2), 'found the needle at position 5');
console.log(findNeedle(haystack_3), 'found the needle at position 30');

// Keep Hydrated!
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7-- -> litres = 3
// time = 11.8-- > litres = 5

function litres(time) {
	return Math.floor(0.5 * time);
}

console.log(litres(2), 1, 'should return 1 litre');
console.log(litres(1.4), 0, 'should return 0 litres');
console.log(litres(12.3), 6, 'should return 6 litres');
console.log(litres(0.82), 0, 'should return 0 litres');
console.log(litres(11.8), 5, 'should return 5 litres');
console.log(litres(1787), 893, 'should return 893 litres');
console.log(litres(0), 0, 'should return 0 litres');

// Is n divisible by x and y ?
// Create a function that checks if a number n is divisible by two numbers x AND y.All inputs are positive, non - zero digits.
// Examples:
// n = 3, x = 1, y = 3 => true because 3 is divisible by 1 and 3
// n = 12, x = 2, y = 6 => true because 12 is divisible by 2 and 6
// n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
// n = 12, x = 7, y = 5 => false because 12 is neither divisible by 7 nor 5

function isDivisible(n, x, y) {
	return n % x === 0 && n % y === 0;
}

console.log(isDivisible(3, 3, 4), false);
console.log(isDivisible(12, 3, 4), true);
console.log(isDivisible(8, 3, 4), false);
console.log(isDivisible(48, 3, 4), true);

// Jenny's secret message
// Jenny has written a function that returns a greeting for a user.
// However, she's in love with Johnny, and would like to greet him slightly different.
// She added a special case to her function, but she made a mistake.
// Can you help her ?

function greet(name) {
	return 'Hello, ' + (name == 'Johnny' ? 'my love' : name) + '!';
}

// or:
// function greet(name) {
// 	if (name === "Johnny")
// 		return "Hello, my love!";
// 	return "Hello, " + name + "!";
// }

console.log(greet('Jim'), 'Hello, Jim!');
console.log(greet('Jane'), 'Hello, Jane!');
console.log(greet('Simon'), 'Hello, Simon!');
console.log(greet('Johnny'), 'Hello, my love!');

// Convert number to reversed array of digits
// Given a random number:
// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.
// Example:
// 348597 => [7, 9, 5, 8, 4, 3]

function digitize(n) {
	return String(n).split('').map(Number).reverse();
}
//  or:

// function digitize(n) {
// 	return n.toString()
// 		.split("")
// 		.reverse()
// 		.map((x) => Number(x));
// }

// or:
// function digitize(n) {
// 	return (n + '').split('').map(Number).reverse();
// }

console.log(digitize(35231), [ 1, 3, 2, 5, 3 ]);

// Beginner - Lost Without a Map
// Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3]-- > [2, 4, 6]
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

function maps(x) {
	return x.map((n) => n * 2);
}

console.log(maps([ 1, 2, 3 ]), [ 2, 4, 6 ]);
console.log(maps([ 4, 1, 1, 1, 4 ]), [ 8, 2, 2, 2, 8 ]);
console.log(maps([ 2, 2, 2, 2, 2, 2 ]), [ 4, 4, 4, 4, 4, 4 ]);

// Invert values
// Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives.
// invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
// invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]
// invert([]) == []
// You can assume that all values are integers.Do not mutate the input array / list.

function invert(array) {
	return array.map((n) => n * -1);
}

console.log(invert([ 1, 2, 3, 4, 5 ]), [ -1, -2, -3, -4, -5 ]);
console.log(invert([ 1, -2, 3, -4, 5 ]), [ -1, 2, -3, 4, -5 ]);
console.log(invert([]), []);
console.log(invert([ 0 ]), [ 0 ]);

// Calculate average
// Write function avg which calculates average of numbers in given list.

function find_average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

console.log(find_average([ 1, 1, 1 ]), 1);
console.log(find_average([ 1, 2, 3 ]), 2);
