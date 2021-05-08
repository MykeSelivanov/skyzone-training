const addUp = (limit) => {
    let sum = 0;
    for (let i = 1; i < limit + 1; i++){
        sum += i;
    };
    return sum;
};

console.log(addUp(4)); // 10