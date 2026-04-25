
function $(id){
    return document.getElementById(id)
}

let clarice = $("clarice")
let time = $("timer")

let currentDate = new Date()

let nextDate = new Date()





console.log(nextDate)

function makeSick(){
    clarice.classList.remove("bounce")
    clarice.classList.add("sad")
    clarice.src = "./assets/clarice-sick.png"
}

function makeHealthy(){
    clarice.classList.remove("sad")
    clarice.classList.add("bounce")
    clarice.src = "./assets/clarice.png"
}





function getNextDate(){
    nextDate.setDate(currentDate.getDate()+1)
    
    //nextDate.setHours(currentDate.hours)
}

function updateTimer(){
    currentDate = new Date();

    

    time.textContent = getTimeLeft()
    


}

function getTimeLeft(timeout) {
    return msToTime(new Date() - nextDate)
}

function msToTime(duration) {
  var milliseconds = Math.floor((duration % 1000) / 100)*-1,
    seconds = Math.floor((duration / 1000) % 60)*-1,
    minutes = Math.floor((duration / (1000 * 60)) % 60)*-1,
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)*-1;

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
}

getNextDate()
setInterval(updateTimer, 1)