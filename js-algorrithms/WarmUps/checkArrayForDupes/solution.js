const haveDupes = (arr) => {
const uniques = new Set(arr);

    if(arr.length === uniques.size) {
        return false;
    }
    return true;
}
console.log(haveDupes([1,2,3]));
console.log(haveDupes([1,2,3,1]));

const haveDupes2 = (arr) => {
    let unique = {};
    for(let i=0; i < arr.length; i++){
        if(unique[arr[i]]) { // true, false
            // unique[arr[i]]++;
            return false;
        } else {
            unique[arr[i]] = 1;
            continue;
        }
    }
    return true;
    // console.log(unique);
    // let values = Object.values(unique);
    // console.log(values);
    // let res = false;
    // values.forEach(value => {
    //     if(value === 1) {
    //         res = false;
    //     } else {
    //         res =  true;
    //     }
    // })
    // return res;
}

console.log(haveDupes2([1,2,3,1]));
console.log(haveDupes2([1,2,3]));


