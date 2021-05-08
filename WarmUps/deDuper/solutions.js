// solution 1
const deDupe = (arr) => {
    let result = [];
    arr.forEach(element => {
        if (!result.includes(element)) {
            result.push(element);
        }
    });
    return result;
};

console.log(deDupe([1,2,2,3]));
console.log(deDupe([4,5,4,4,4,7,5]));
console.log(deDupe([1,2,3,5]));

// solution 2 with Set
const removeDupes = (arrWithDupes) => {
    const uniqueObj = new Set(arrWithDupes);
    const result = Array.from(uniqueObj);
    return result;
};

console.log(removeDupes([4,4,5,5,6,6,7,7,7,78,95]));