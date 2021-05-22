const increasingOrder = (a, b, c, equalOk) => {
    if (equalOk) {
        return a <= b && b <= c;
    } 
    return a < b && b < c;
}

console.log('expctd true: ', increasingOrder(1, 2, 3, false)); 
console.log('expctd true: ', increasingOrder(0, 1, 100, false)); 
console.log('expctd true: ', increasingOrder(-5, -4, 0, false)); 
console.log('expctd false: ', increasingOrder(-100, 0, -1, true)); 
console.log('expctd false: ', increasingOrder(1, 1, 1, false)); 
console.log('expctd false: ', increasingOrder(3, 2, 1, true)); 
console.log('expctd true: ', increasingOrder(1, 1, 1, true));
console.log('expctd true: ', increasingOrder(1, 1, 2, true));
console.log('expctd true: ', increasingOrder(-10, -8, -8, true));
console.log('expctd false: ', increasingOrder(-10, -8, -8, false));
