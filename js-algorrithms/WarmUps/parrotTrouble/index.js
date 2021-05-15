const inTrouble = (hour, isTalking) => {

    if (isNaN(hour)) throw Error('Parameter should be a number');
    if (hour < 0 || hour > 23) throw Error('Parameter should be valid time in the 0 - 23 range');

    return ((hour < 7 || hour > 20) && isTalking);
}

console.log(inTrouble(6, true));
console.log(inTrouble(10, true));
console.log(inTrouble(22, true));
console.log(inTrouble(0, true));
// console.log(inTrouble(100, true));
// console.log(inTrouble(-5, true));
// console.log(inTrouble('string', true));

console.log(inTrouble(6, false));
console.log(inTrouble(10, false));
console.log(inTrouble(22, false));
console.log(inTrouble(0, false));

