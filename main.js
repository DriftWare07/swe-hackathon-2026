
function $(id){
    return document.getElementById(id)
}

let clarice = $("clarice")
let time = $("timer")
let bar = $("bar")

let healthyImage = "./assets/clarice.png"


let interactions = 0;

let timeNotSpent = 0;

let happiness = 0;

let endPoint = "http://127.0.0.1:8000/"







function makeSick(){
    clarice.classList.remove("bounce")
    clarice.classList.add("sad")
    clarice.src = "./assets/clarice-sick.png"
}

function makeHealthy(){
    clarice.classList.remove("sad")
    clarice.classList.add("bounce")
    clarice.src = healthyImage
}


function increaseInteractions(){
    interactions += 1;
    updateInteractions()
    timeNotSpent += 1;
    if (timeNotSpent > 7){
        makeSick()
    }

    

}

function updateInteractions(){
time.textContent = interactions + ' actions left'
}

function play(){

    if(interactions <= 0){
        return
    }

    happiness += 1
    
    //interactions -= 1;
    timeNotSpent = 0;
    updateInteractions()

    makeHealthy()

    if(happiness >= 10){
        happiness = 0
        hatTime()
    }
    bar.value = happiness
    reduceActions()

}

function hatTime(){
makeHealthy()
clarice.src = "./assets/clarice-hat.png"
}

async function getActions() {

    console.log("fetching actions")


    try {
        var response = await fetch(endPoint)

        if (!response.ok) {
            imgEl.alt = "No image found for that breed :("
            throw new Error("HTTP error: " + response.status);
            
            
        }
    }
    catch (error) {
        imgEl.alt = error.message
        console.log(error.message)
    }
    console.log("Fetched resource")


    const result = await response.json()

    

    console.log(result.actions)

    
    timeNotSpent += result.actions - interactions
    interactions = result.actions

    if(timeNotSpent > 7){
        makeSick()
    }

    console.log(timeNotSpent)

    updateInteractions()

    return result
}

async function reduceActions() {

    console.log("fetching actions")


    try {
        var response = await fetch(endPoint+"sub")

        if (!response.ok) {
            
            throw new Error("HTTP error: " + response.status);
            
            
        }
    }
    catch (error) {
        imgEl.alt = error.message
        console.log(error.message)
    }
    console.log("Fetched resource")


    const result = await response.json()

    

    console.log(result.actions)

    interactions = result.actions
    updateInteractions()

    return result
}

async function increaseActions() {

    console.log("fetching actions")


    try {
        var response = await fetch(endPoint+"add")

        if (!response.ok) {
            
            throw new Error("HTTP error: " + response.status);
            
            
        }
    }
    catch (error) {
        imgEl.alt = error.message
        console.log(error.message)
    }
    console.log("Fetched resource")


    const result = await response.json()

    

    console.log(result.actions)

    interactions = result.actions
    updateInteractions()

    return result
}

setInterval(getActions, 1000)



