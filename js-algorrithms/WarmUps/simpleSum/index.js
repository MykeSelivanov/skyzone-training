const simpleSum = (num1, num2) => {
    return (num1 === num2) ? 2 * (num1 + num2) : num1 + num2;
}

console.log(simpleSum(2,2));
console.log(simpleSum(0,0));
console.log(simpleSum(4,5));