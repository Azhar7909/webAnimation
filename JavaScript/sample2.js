// cloud1
var elem = document.querySelector('#cloud1');

var animatedElem = elem.animate([
    { transform: 'translate(0,20px)' },
    { transform: 'translate(550px,80px)' },
    { transform: 'translate(80vw,20px)' },
    { transform: 'translate(550px,80px)' },
    { transform: 'translate(0,20px)' },

], {
    duration: 150000,
    iterations: Infinity
})

// cloud4
var elem = document.querySelector('#cloud4');

var animatedElem = elem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(-200px,0)' },
    { transform: 'translate(20vw,20px)' },
    { transform: 'translate(200px,80px)' },
    { transform: 'translate(0,0)' },

], {
    duration: 150000,
    iterations: Infinity
})

// cloud6
var elem = document.querySelector('#cloud6');

var animatedElem = elem.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate(-200px,0)' },
    { transform: 'translate(20vw,20px)' },
    { transform: 'translate(200px,80px)' },
    { transform: 'translate(0,0)' },

], {
    duration: 150000,
    iterations: Infinity
})

document.addEventListener("mousedown", () => {
    animatedElem.pause();
})

document.addEventListener("mouseup", () => {
    animatedElem.play();
})