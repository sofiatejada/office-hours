// What's a TERNARY OPERATOR?

/* 
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
*/

// condition ? expressionIfTrue : expressionIfFalse
// expression that executes if the contition is truthy
// expression that executes if the condition is falsy

/*

The following values are considered falsy:
- false
- 0
- -0
- ""
- null
- undefined
- NaN

Everything else is truthy.

*/

const score = 12;
let scoreRating;

// if (score > 70) {
//     scoreRating = 'Excellent';
// } else {
//     scoreRating = 'Do better';
// }

const brian =
    score > 70 ? (scoreRating = 'Excelent') : (scoreRating = 'Do better');

console.log('does this work', brian);

// How do we change this to a ternary operator?

const printPoor = () => {
    console.log('Poor result');
    return 'poor';
};

const printSuccess = () => {
    console.log('Nice result');
    return 'success';
};

// Let's change this to a ternary operator!

// console.log(result);

// Chaining ternary operators!

function example() {
    return condition1
        ? value1
        : condition2
        ? value2
        : condition3
        ? value3
        : value4;
}

function example() {
    if (condition1) {
        return value1;
    } else if (condition2) {
        return value2;
    } else if (condition3) {
        return value3;
    } else {
        return value4;
    }
}

const result =
    score > 70
        ? (scoreRating = 'Excellent')
        : score > 50
        ? (scoreRating = 'Terrible')
        : score > 10
        ? (scoreRating = 'redo')
        : (scoreRating = 'why are you here');

console.log(result);

// const score = 60;
// let scoreRating;

// if (score > 70) {
//     scoreRating = 'Excellent';
// } else if (score > 50) {
//     scoreRating = 'Average';
// } else {
//     scoreRating = 'Do better';
// }

// console.log(scoreRating);

// One more time!
