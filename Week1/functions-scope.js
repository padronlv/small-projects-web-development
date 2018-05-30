// Exercises
// Write a function that takes any number of numbers as parameters and returns
// the sum of those numbers.
// sum(5, 10); //15
//
// sum(5, 10, 15); //30;
//
// sum(5, 10, 15, 100, 200); //330

function sum() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum (5, 10, 15, 100, 200));

// Write a function that takes another function as a parameter. It should
// wait 1.5 seconds and then run the function that was passed in.
// waitThenRun(function() {
//     console.log('Hello!');
// }); // logs 'Hello!' 1.5 seconds later
//
// waitThenRun(function() {
//     console.log('Goodbye!');
// }); // logs 'Goodbye!' 1.5 seconds later

function waitThenRun(fn) {
    setTimeout(fn, 1500);
}
waitThenRun(function() {
    console.log('Hello!');
}); // logs 'Hello!' 1.5 seconds later
waitThenRun(function() {
    console.log('Goodbye!');
}); // logs 'Goodbye!' 1.5 seconds later

// Write a function that expects a number as a parameter. If the value that
// is passed in is less than 0, equal to 0, or not a number, the function
// should return the string 'ERROR'. If the number that is passed in is
// greater than or equal to 1000000 it should simply return the number.
// Otherwise it should multiply the number by 10 however many times it takes
// to get a number that is greater than or equal to 1000000 and return that.

function bigger(nb) {
    if (typeof nb != "number") {
        return "error";
    } else if (Number.isNaN(nb) ) {
        return "error";
    } else if (nb <= 0 ) {
        return "error";
    } else {
        while(nb <= 1000000) {
            nb *= 10;
        }
        return nb;
    }
}
bigger(10);

// Bonus exercise
// Write a function that returns a function that can be called repeatedly and
// passed a number each time. Each time it is called it should return the sum
// of the number that is passed in and all other numbers that were passed in
// previous calls. That is, it should return the sum of all the numbers that
// were ever passed to it.
//
// var totaler = getTotaler();
// totaler(1); //1
// totaler(2); //3
// totaler(5); //8

function getTotaler() {
    var total = 0;
    function sub(num) {
        total += num;
        return total;
    }
    return sub;
}
var totaler = getTotaler();
totaler(5);
totaler(10);
console.log(totaler(3));
