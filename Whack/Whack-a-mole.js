const HEADER_SELECT = document.querySelector("header");
const MAIN_SELECT = document.querySelector("main");
const SCORE_SELECT = document.getElementById("score");

let time = 0;
let score = 0;

function createCircle(numCircle){
    for(let i = 0; i < numCircle; i++ ){
        let circle = document.createElement("div");
        circle.className = `circle`;
        circle.id = `Circle${1}`;
        MAIN_SELECT.appendChild(circle);
    }
}

function setTimer(timeSet){
    let time = timeSet;
    const Timer = setInterval(() => {
        time--;
        HEADER_SELECT.innerHTML = `Time Left : ${time}`
        if(time === 0){
            clearInterval(Timer);
        }
    }, 1000);
}

function createHitCircle(){
    
}

createCircle(12);
setTimer(60)
SCORE_SELECT.innerHTML = `Score : ${score}`