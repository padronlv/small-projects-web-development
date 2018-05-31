// Write a function called each that accepts either an object or an array as its
// first parameter and a callback as its second parameter.
//
// If the first parameter is an object, it should loop over the object's
// properties and call the callback for each one. The property value should be
// the first parameter passed to the callback and the property name should be the second.
//
// If the first parameter is an array, it should loop over the array's elements
// and call the callback for each one. The array element should be the first
// parameter passed to the callback and the index should be the second.
//
//   each({
//     a: 1,
//     b: 2
//   }, function(val, name) {
//     console.log('The value of ' + name + ' is ' + val);
//   }); // logs 'the value of a is 1' and 'the value of b is 2'
//
//   each(['a', 'b'], function(val, idx) {
//     console.log('The value of item ' + idx + ' is ' + val);
//   }); // logs 'the value of item 0 is a' and 'the value of item 1 is b'


function each(x, fn) {
    if (Array.isArray(x)) {
        x.forEach(fn);
    } else if (typeof x == "object") {
        for (var key in x) {
            fn(x[key], key);
        }
    }
    else {
        console.log("Error: Object or Array expected");
    }
}

each({
    a: 1,
    b: 2
}, function(val, name) {
    console.log('The value of ' + name + ' is ' + val);
}); // logs 'the value of a is 1' and 'the value of b is 2'

each(['a', 'b'], function(val, idx) {
    console.log('The value of item ' + idx + ' is ' + val);
}); // logs 'the value of item 0 is a' and 'the value of item 1 is b'

// Write a function that takes an array as a parameter and returns a new array
// containing all of the items that are in the array that was passed in but in
// reverse order. Unlike the reverse method that all arrays have, this function
// should leave the original array unchanged.
//
function newReverse(arr) {
    if (Array.isArray(arr)) {
        var newArray = arr.map(function(value) {
            return value;
        });
        return newArray.reverse();
    } else {
        console.log("Error: Array expected");
    }
}

var myArray = [10, 20, 30, 40, 50];
newReverse(myArray);

// Write a function called getLessThanZero that expects an array of numbers to
// be passed to it and returns a new array containing only those numbers from
// the array that was passed in that are less than zero.
//
//   getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
//   getLessThanZero([1, 2]); //[]

function getLessThanZero(arr) {
    if (Array.isArray(arr)) {
        var newArr = arr.filter(function(value) {
            return value < 0;
        });
        return newArr;
    } else {
        console.log("Error: Array expected");
    }
}
getLessThanZero([1, 2, -1, -90, 10]); //[-1, -90]
getLessThanZero([1, 2]); //[]
