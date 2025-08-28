// Comparison operators useed to equate\evaluate different values
// They give bollean answers

let number1 =10
let number2 = 20

console.log(number1<number2)
console.log(number1>number2)
console.log(number1<=number2)
console.log(number1>=number2)
console.log(number1==number2)
console.log(number1!=number2)
console.log(number1===number2)  // it also compares data type and the values


// logical operators
// logical AND(&&)
// It evaluates to true if and only if both of the statements are true
console.log((number1<=number2) && (number2>number1))

// logical OR (||)
// It evaluates to true if one of the statement is true
console.log((number1<=number2) || (number2>number1))

// Logical Not
// It negates (Gives the opposite of something)
console.log(!(number1>number2))