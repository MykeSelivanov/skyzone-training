const inquirer = require('inquirer'); // import the inquirer package

const vowelPrompt = () => {
    inquirer.prompt(
        [
            {
                type: "input",
                message: "Enter a string and have it's vowels counted (excluding 'y')",
                name: "string"
            }
        ]
    ).then(answer => {
        let str = answer.string;
        let count = 0;
        const vowelArr = ['a', 'e', 'i', 'o', 'u'];
        for (let letter of str) {
            vowelArr.includes(letter.toLowerCase()) ? count++ : null;
            // ternary operator--this is the same as 
            // if (vowelArr.includes(letter.toLowerCase())) {
            // count++
            // } else {
            // null
            // }
        };

        console.log(`There are ${count} vowels in ${str}`);
    
    }).then(() => {
        wannaPlay();
    }).catch(err => {
        console.log(`Somehow there's been an error. What have you done!?!?!?!`)
    })
}

const wannaPlay = () => {
    inquirer.prompt(
        [
            {
                type: "confirm",
                message: "Do you want to have a string's vowels counted?",
                default: true,
                name: "letsCount"
            }
        ]
    ).then(answer => {
        answer.letsCount === true ? vowelPrompt() : console.log(`Hasta la vista`)
    }).catch(err => {
        console.log(`Somehow there's been an error. What have you done!?!?!?!`)
    });
}

vowelPrompt();