/* 
CHALLENGE 1

Write a function named capArray that takes in an array of strings and returns the same array with all items in uppercase letters.
 */

const myObj = {
    name: 'sofia',
    myOtherObj: {
        name: 'stephen',
        age: 27,
        'my-arr': ['hi', 'bye'],
    },
    age: 32,
};

const myOtherArr = [
    'hi',
    'bye',
    ['good morning', 'good evening'],
    { books: 3, name: 'book' },
];

console.log(myObj.myOtherObj['my-arr']);

function capArray(arr) {
    return arr.toString().toUpperCase().split(',');
}

/* TEST:*/
var people = ['John', 'Cathy', 'Allie', 'Zach'];
var correct = ['JOHN', 'CATHY', 'ALLIE', 'ZACH'];

var test = capArray(people);

var check = () => {
    !test
        ? console.log(
              "There's an error in your code! Your result is undefined!"
          )
        : Array.isArray(test) && test.toString() === correct.toString()
        ? console.log('You pass! Great job!')
        : console.log('Try again! Are you returning an array?');
    return test;
};

console.log(check());
