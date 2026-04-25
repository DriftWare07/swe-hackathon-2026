
function $(id){
    return document.getElementById(id)
}

let clarice = $("clarice")

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

