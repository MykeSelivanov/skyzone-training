// const loneSum = (a,b,c) => {
//     let uniques = new Set();
//     uniques.add(a);
//     uniques.add(b);
//     uniques.add(c);

//     let sum = 0;
//     uniques.forEach(int => {
//         sum += int;
//     });
//     return sum;
// }

const loneSum = (a,b,c) => {
    if (a === b || b === c || a === c) {
        if (a === b && b !== c && a !== c) return b + c; 
        if (b === c && a !== b && a !== c) return a + c; 
        if (a === c && a !== b && b !== c) return a + b; 
        if (a === c && a === b && b === c) return a; 
    }
    return a + b + c;
}

// tests 
console.log('expctd 6: ', loneSum(1,2,3));
console.log('expctd 4: ', loneSum(1,1,3));
console.log('expctd 1: ', loneSum(1,1,1));
console.log('expctd 0: ', loneSum(0,0,0));
console.log('expctd 10: ', loneSum(5,1,4));
console.log('expctd 0: ', loneSum(-1,0,1));
console.log('expctd 100: ', loneSum(50,49,1));
console.log('expctd 100: ', loneSum(-50,100,50));
console.log('expctd 7: ', loneSum(2,5,5));
console.log('expctd 12: ', loneSum(3,4,5));
