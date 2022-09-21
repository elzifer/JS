let light = document.querySelector('#trafficLight');
const trafficLightGreen = document.querySelector('#trafficLight1');
const trafficLightYellow = document.querySelector('#trafficLight2');
const trafficLightRed = document.querySelector('#trafficLight3');

light.addEventListener('click', makeGreen);

function makeGreen() {
    trafficLightGreen.style.background = ('green');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('black');
    light.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.style.background = ('black');
    trafficLightRed.style.background = ('black');
    light.addEventListener('click', makeRed);
}

function makeRed() {
    trafficLightRed.style.background = ('red');
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    light.addEventListener('click', makeGreen);
}
