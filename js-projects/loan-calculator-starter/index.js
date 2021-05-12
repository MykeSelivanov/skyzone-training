const amountInput = document.getElementById('amount');
const rateInput = document.getElementById('amount');
const monthsInput = document.getElementById('months');
const total = document.getElementById('total');

const calculateMonthlyPayment = () => {
    return (amountInput.value * (rateInput.value / 100)) / monthsInput.value;
};

const confirmBtn = document.createElement('Button');
confirmBtn.textContent = 'Calculate';
document.querySelector('main').append(confirmBtn);

confirmBtn.addEventListener('click', (event) => {
    if (amountInput.value === '' || rateInput.value === '' || monthsInput.value === '') {
        alert('You need to provide all input values!');
    } else {
        if (isNaN(amountInput.value) || isNaN(rateInput.value) || Number.isNaN(monthsInput.value)) {
            alert('Inputs should be numeric values!');
        } else {
            const monthlyPayment = (amountInput.value * (rateInput.value / 100)) / monthsInput.value;
            total.textContent += ` ${monthlyPayment}`;
            console.log(monthlyPayment);
        }
    }
});




