const commonSubstring = (srting1, string2) => {
    let hashMap = {};

    for (let i = 0; i < srting1.length; i++) {
        let char = srting1[i];
        if (!hashMap[char]) {
            hashMap[char] = 1;
        } 
    }
    let result = "no";

    for (let j = 0; j < string2.length; j++) {
        let char2 = string2[j];
        if (hashMap[char2]) {
            result = "yes";
        }
    }
    return result;
}

console.log(commonSubstring('hello', 'w'));
console.log(commonSubstring('hi', 'world'));
console.log(commonSubstring('hello', 'world'));
console.log(commonSubstring('a', 'bc'));
console.log(commonSubstring('hello', 'world'));

