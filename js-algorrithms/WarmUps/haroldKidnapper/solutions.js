const canReplicate = (magazine, note) => {
    // const magazine = magazine.split(' ');
    // const note = note.split(' ');
    let hashMap = {};
    let result = "Yes";

    for (let i = 0; i < magazine.length; i++) {
        if (!hashMap[magazine[i]]) {
            hashMap[magazine[i]] = 1;
        } else {
            hashMap[magazine[i]]++;
        }
    }

    for (let j = 0; j < note.length; j++) {
        if (!hashMap[note[j]]) {
            result = "No";
            break;
        } else if (hashMap[note[j]] === 0) {
            result = "No";
            break;
        } 
        hashMap[note[j]]--;
    }
    return result;
}

console.log('expected true, result: ', canReplicate('give me one grand today night', 'give one grand today'));
console.log('expected false, result: ', canReplicate('two times three is not four', 'two times two is four'));
console.log('expected false, result: ', canReplicate('hello', 'hi'));
console.log('expected true, result: ', canReplicate('this is going to be a great great day', 'great going be'));
