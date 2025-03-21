let woz = "Wozniak";
let times = 0;

const writeTime =setInterval(stringToLetter,1000, woz);



function stringToLetter(charString){
    console.log(charString[times]);
    times++
    if(times >= charString.length){
        clearInterval(writeTime)
    }

}

