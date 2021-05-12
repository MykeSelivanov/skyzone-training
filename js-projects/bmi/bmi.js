const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculateBtn = document.querySelector('button');
const results = document.querySelector('#results');


calculateBtn.addEventListener('click', (event) => {
    // check for empty inputs
    event.preventDefault();
    if (height.value === '' || weight.value === '') {
        alert('You need to provide both height and weight inputs');
    } else {
        // parse inputs
        const heightNum = parseInt(height.value);
        const weightNum = parseInt(weight.value);

        // if NaN, give a mesasge, clear inputs
        if (isNaN(heightNum) || isNaN(weightNum)) {
            height.value = '';
            weight.value = '';
            alert('You need to provide height and weight in digits and ONLY digits')
        } else {
            const bmi = (weightNum / ((heightNum * heightNum) / 10000)).toFixed(2);
            results.innerHTML  = `<h2>${bmi}</h2>`;

            // give proper suggestion
            if (bmi < 18.6) {
                results.innerHTML  += `<h3>You're a bit underweight</h3>`;
            }
            if (bmi > 18.6 && bmi < 24.9) {
                results.innerHTML  += `<h3>You're in a normal range, good job!</h3>`;
            }
            if (bmi > 24.9) {
                results.innerHTML  += `<h3> Sorry, but you're on the overwight side!</h3>`;
            }
        }
    }
});

