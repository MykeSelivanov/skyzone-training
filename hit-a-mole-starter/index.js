let score = 0;
const scoreCount = () => {
    document.getElementById('score').textContent = score;
};
scoreCount();

const molePlacement = () => {
    const holes = document.getElementsByClassName('hole');
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
        holes[randomHoleIndex].classList.toggle('mole');
};
setInterval(() => {
    molePlacement();
}, 100);

const clearHoles = () => {
    const holes = document.getElementsByClassName('hole');
    holes.forEach(element => {
        if (element.classList.contains('mole')) {
            element.classList.remove('mole');
        };
    });
};

const playField = document.getElementById('hit-a-mole');
playField.addEventListener('click', (event) => {
    if (event.target.matches('.mole')) {
        score++;
        event.target.classList.remove('mole');
        scoreCount();
    };
});


