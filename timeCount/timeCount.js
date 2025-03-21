let time = 0;
let minute = 0;
const H2_SELECT= document.querySelector("h2")

const thisTime = setInterval(writeTime,1000)

function writeTime(){
    time++
    if(time % 60 === 0 ){
        minute++
        if(minute === 1){
            H2_SELECT.innerHTML="a minute has passed"
        }else{
        H2_SELECT.innerHTML=`${minute} minutes have passed`
        }
    }else{
        H2_SELECT.innerHTML= time
    }

}