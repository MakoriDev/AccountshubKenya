// Create a program that checks if the last two digits of a number are the same 

function validate (num1, num2){
    const lastdigit1 = num1 % 10;
    const lastdigit2 = num2 % 10;
    return lastdigit1 === lastdigit2;
}

const num1 = 206;
const num2 = 36;

const result = validate(num1, num2);

console.log(result);