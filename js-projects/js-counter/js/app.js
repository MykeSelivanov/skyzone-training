// solution 1
// 2 buttons
// const prevBtn = document.querySelector('.prevBtn');
// const nextBtn = document.querySelector('.nextBtn');
// // counter 
const output = document.querySelector('#counter');

// 2 inputs
const lowerValue = document.querySelector('#lowerValue');
const upperValue = document.querySelector('#upperValue');
// errors
const error = document.querySelector('#errorOutput');

let count = 0;
let lowerVal = 0;
let upperVal = 0;

const setLowerValue = () => {
    lowerValue.addEventListener('change', (event) => {
        const lVal = Number.parseInt(event.target.value);
        if(Number.isNaN(lVal)) {
            error.textContent = 'Please provide correct type for this option to work';
        }
        if (lVal > 0) {
            error.textContent = 'Please provide number bigger than 0 for this option to work';
        } else {
            lowerVal = lVal;
            error.textContent = '';
        }
    });
};
setLowerValue();

const setUpperValue = () => {
    upperValue.addEventListener('change', (event) => {
        const uVal = Number.parseInt(event.target.value);
        if(Number.isNaN(uVal)) {
            error.textContent = 'Please provide correct type for this option to work';
        }
        if (uVal < 0) {
            error.textContent = 'Please provide number bigger than 0 for this option to work';
        } else {
            upperVal = uVal;
            error.textContent = '';
        }
    });
};
setUpperValue();

// solution 2
const trigger = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if(button.classList.contains('prevBtn')) {
                count--;
                if (lowerVal < 0) {
                    if (count < lowerVal) {
                        count = lowerVal;
                        return;
                    }
                }
            }; 
            
            if (button.classList.contains('nextBtn')) {
                count++;
                if (upperVal > 0) {
                    if (count > upperVal) {
                        count = upperVal;
                        return;
                    }
                }
            };
            output.textContent = count;

            if (count < 0) {
                output.style.color = 'red';
            } else if (count > 0) {
                output.style.color = 'green';
            };
        });
    });
};
trigger();