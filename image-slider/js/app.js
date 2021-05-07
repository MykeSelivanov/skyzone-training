const pictures = [
    'contBcg-0',
    'contBcg-1',
    'contBcg-2',
    'contBcg-3',
    'contBcg-4',
];

const carNames = [
    'Mercedes AMG',
    'Mercedes E Class',
    'BMW',
    'AUDI',
    'Dodge Challenger',
];

const carName = document.querySelector('.car-name');
carName.textContent = carNames[0];

const rightArrow = document.getElementById('icon-right');
const leftArrow = document.getElementById('icon-left');
const imgContainer = document.querySelector('.img-container');

let count = 0;
// right slide click
const imgSlider = (index) => { 
    rightArrow.addEventListener('click', () => {
        index++;
        if (index === pictures.length) {
            index = 0;
        };
        imgContainer.style.background = "url(\"./img/" + pictures[index] + ".jpeg\") center/cover no-repeat";
        carName.textContent = carNames[index];
    });

// left slider click
    leftArrow.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = pictures.length - 1;
        };
        imgContainer.style.background = "url(\"./img/" + pictures[index] + ".jpeg\") center/cover no-repeat";
        carName.textContent = carNames[index];
    });
};
imgSlider(count);

// auto play / stop
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');

const allIntervals = [];
// clicking function
const playFunc = function(){
    const timer = setInterval(() => {
        rightArrow.click();
    }, 900);
    allIntervals.push(timer);
};

playBtn.addEventListener('click', playFunc);

stopBtn.addEventListener('click', () => {
    allIntervals.forEach(clearInterval)
});
