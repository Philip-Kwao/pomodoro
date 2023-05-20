const timerEl = document.getElementById("timer")
const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")

let interval
let timeLeft = 1500

function updateTimer(){
    let minutes = Math.floor(timeLeft / 60)
    let seconds = Math.floor(timeLeft % 60)

    timerEl.textContent = `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2, "0")}` 
    
    if(timeLeft === 0){
        clearInterval(interval)
        alert("Time is Up")
        timeLeft = 1500
    }
}

function startBtn(){
    interval = setInterval(()=>{
        timeLeft--
        updateTimer()
    }, 1000)
}

function stopBtn(){
    clearInterval(interval)
}

function resetBtn(){
    clearInterval(interval)
    timeLeft = 1500
    timerEl.textContent = "25:00"
}

startEl.addEventListener("click", startBtn)
stopEl.addEventListener("click", stopBtn)
resetEl.addEventListener("click", resetBtn)