const inTrouble = (aSmile, bSmile) => {
    return (aSmile === bSmile);
}

console.log(inTrouble(true,true));
console.log(inTrouble(false,false));
console.log(inTrouble(true,false));
console.log(inTrouble(false,true));