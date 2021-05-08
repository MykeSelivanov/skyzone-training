const totalBill = document.getElementById('totatlBill');
const numOfPeople = document.getElementById('numOfPeople');
const serviceDropdown = document.getElementById('serviceDropdown');
const calculateBtn = document.getElementById('calculate');
const inputsBox = document.querySelector('.inputs');
calculateBtn.style.float = 'right';

let selectedTipOption = 0;
serviceDropdown.addEventListener('change', (event) => {
    if (event.target.value === 'good') {
        selectedTipOption = 0.1;
    } else if (event.target.value === 'poor') {
        selectedTipOption = 0.02;
    } else if (event.target.value === 'excellent') {
        selectedTipOption = 0.2;
    };
});

let billWithTips = 0;
let billPerPerson = 0;

calculateBtn.addEventListener('click', () => {
    if (totalBill.value === '' || numOfPeople.value === '') {
        alert('Please provide bill amount and number of people');
    } else {
        billWithTips = Number.parseInt(totalBill.value) * selectedTipOption + Number.parseInt(totalBill.value);
        billPerPerson = billWithTips / Number.parseInt(numOfPeople.value);

        const tipAmount = document.createElement('p');
        const totalAmount = document.createElement('p');
        const eachPerson = document.createElement('p');
        tipAmount.textContent = `Tip Amount $ ${Number.parseInt(totalBill.value) * selectedTipOption}`;
        totalAmount.textContent = `Total Amount $ ${billWithTips}`;
        eachPerson.textContent = `Each Person $ ${billPerPerson}`;

        inputsBox.append(tipAmount);
        inputsBox.append(totalAmount);
        inputsBox.append(eachPerson);
    };
});

// const tipAmount = document.createElement('p');
// const totalAmount = document.createElement('p');
// const eachPerson = document.createElement('p');
// tipAmount.textContent = `Tip Amount $ ${Number.parseInt(totalBill.value) * selectedTipOption}`;
// totalAmount.textContent = `Total Amount $ ${billWithTips}`;
// eachPerson.textContent = `Each Person $ ${billPerPerson}`;

// inputsBox.append(tipAmount);
// inputsBox.append(totalAmount);
// inputsBox.append(eachPerson);


