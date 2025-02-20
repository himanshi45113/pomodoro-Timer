const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");


let interval 
let timeLeft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes. toString(). padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    timerE1.innerHTML= formattedTime
}

function startE1timer(){
    interval = setInterval(()=> {
        timeLeft--;
    updateTimer();
       if(timeLeft === 0){
           clearInterval(interval);
           alert("Time's up!")
           timeLeft = 1500;
           updateTimer();
       }

    },1000);


}


function stopE1timer(){
    clearInterval(interval);
}

function resetE1timer(){
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}









startE1.addEventListener("click", startE1timer);
stopE1.addEventListener("click", stopE1timer);
resetE1.addEventListener("click",resetE1timer );
