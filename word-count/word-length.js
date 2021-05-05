const inputEl = document.getElementById('str');
const calculateBtn = document.getElementById('btn');
const outputEl = document.getElementById('output');

console.log('input', inputEl.value);
console.log('button', calculateBtn);

// add evetListener to Button
calculateBtn.addEventListener('click', () => {
    // get the value from input element
    const inputValue = inputEl.value;

    // calculate the user input word length
    const wordLength = inputValue.length;

    // append it to output element
    outputEl.innerHTML = `<h1>${wordLength}`;
});

// Styling
const styleBtn = document.querySelector('.style');

const addStyle = (event) => {
    console.log(event.type);
    if (event.type === 'mouseover') {
        document.body.style.backgroundColor = 'lightblue';
        styleBtn.style.color = '#fff';
        styleBtn.style.backgroundColor = '#000';
    }
    if (event.type === 'mouseout') {
        document.body.style.backgroundColor = '#000';
        styleBtn.style.color = '#000';
        styleBtn.style.backgroundColor = 'green';
    }
}

styleBtn.addEventListener('mouseover', addStyle);
styleBtn.addEventListener('mouseout', addStyle);

