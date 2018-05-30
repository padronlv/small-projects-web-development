// Write a function named logType that expects a single argument and
// logs a different string depending on the type/value of the argument
// that is passed to it. The string it logs should be one of the following:
// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"

function logType(arg) {
    if (typeof arg == "string") {
        console.log("string!");
    } else if (typeof arg == "undefined") {
        console.log("undefined!");
    } else if (typeof arg == "boolean") {
        console.log("boolean!");
    } else if (Number.isNaN(arg)) {
        console.log("not a number!");
    } else if (typeof arg == "number") {
        console.log("number!");
    } else if (arg === null) {
        console.log("null!");
    } else if (Array.isArray(arg)) {
        console.log("array!");
    } else if (typeof arg == "object") {
        console.log("object!");
    } else if (typeof arg == "function") {
        console.log("function!");
    } else {
        console.log("I have no idea!");
    }
}
logType(3);

// Copy the following object into your code:
// var a = {
//     Berlin: 'Germany',
//     Paris: 'France',
//     'New York': 'USA'
// };
// Then create a new empty object b and use a for..in loop to iterate over
// all of a's properties. Give b properties whose names are the values from
// a and whose values are the property names from a. The result should be an
// object that looks like this:
//
// {
//     Germany: 'Berlin',
//     France: 'Paris',
//     USA: 'New York'
// }

var a = {
    Berlin: "Germany",
    Paris: "France",
    "New York": "USA"
};

var b = {};
for (var key in a) {
    b[a[key]] = key;
}
console.log(a);
console.log(b);

// Write a while or for loop that counts down from 10 to 1, logging each
// number to the console.

var i = 10;
while (i > 0) {
    console.log(i);
    i--;
}
