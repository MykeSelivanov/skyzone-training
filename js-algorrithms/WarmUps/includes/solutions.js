const memberOfArray = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return true;
        };
    };
    return false;
};

console.log(memberOfArray(['one','two','three'],'one'));
console.log(memberOfArray([1,2,3],4));