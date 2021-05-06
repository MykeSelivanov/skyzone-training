const holes = document.getElementsByClassName('hole');
   
const randomHoleIndex = Math.floor(Math.random() * holes.length);
holes[randomHoleIndex].classList.toggle('mole');