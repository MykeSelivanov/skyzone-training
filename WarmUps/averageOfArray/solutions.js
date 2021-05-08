// solution 1
const averageArray = (arr) => {
    let result = 0;
    arr.forEach(number => {
        result += number;
    });
    return result / arr.length;
};
console.log(averageArray([1,2,3,4]));

// solution 2 with reduce
const averageArray2 = (arr) => {
    return arr.reduce((sum, num) => {
        return sum += num;
    },0) / arr.length;
};
console.log(averageArray2([1,2,3,4]));