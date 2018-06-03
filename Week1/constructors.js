// Exercises
// Write a constructor called Rectangle that accepts two numbers (width and
// height) as parameters. Rectangle instances should have a method called
// getArea that returns the instance's width multiplied by its height. Write
// another constructor called Square that accepts one number (which will
// serve as both width and the height) as a parameter. Instances of Square
// should also have a getArea method but you should not rewrite the getArea
// function you wrote for Rectangle. Square instances should use the same
// getArea method that Rectangle instances do.

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.getArea = function() {
        return this.width * this.height;
    };
}

function Square(length) {
    this.width = length;
    this.height = length;
}

var rect = new Rectangle(4, 5);
rect.getArea(); //20
Square.prototype = new Rectangle;
Square.prototype.constructor = Square;
var sqr = new Square(4);
sqr.getArea(); //16

// Write a function called invertCase that expects a string as a parameter.
// This function should return a new string with all the same characters as
// the string that was passed in but with the cases of the alphabetic
// characters switched. Uppercase characters should become lowercase and
// lowercase letters should become uppercase. Characters that are not
// alphabetic should not change. String.prototype.toUpperCase and
// String.prototype.toLowerCase will come in handy here.

function invertCase(str) {
    var strInv = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            strInv += str[i].toUpperCase();
        } else {
            strInv += str[i].toLowerCase();
        }
    }
    return strInv;
}

var a = invertCase("Hello World! 123");
console.log(a);

// Bonus Exercise
// Write a constructor called Countdown that accepts a single argument - the
// number of seconds to count down. It should be possible to call the start
// method of instances of Countdown to initiate the countdown. Once the
// countdown starts, it should count down to zero starting with the number
// that was passed to the constructor and logging each number to the console
// with a one second delay.

function Countdown (seconds) {
    this.time = seconds;
    this.count = function () {
        for (var i = this.time; i >= 0; i--) {
            setTimeout(function() {
                console.log(i);
            }, 1000);
            // console.log(i);
        }
    };
}

var cd = new Countdown(10);
cd.count();

// Not working, I don't know the reason.
