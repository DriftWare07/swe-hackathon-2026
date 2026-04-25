
let endPoint = "http://127.0.0.1:8000/"

async function increaseActions() {

    console.log("fetching actions")


    try {
        var response = await fetch(endPoint+"add")

        if (!response.ok) {
            
            throw new Error("HTTP error: " + response.status);
            
            
        }
    }
    catch (error) {
        
        console.log(error.message)
    }
    console.log("Fetched resource")


    const result = await response.json()

    

    console.log(result.actions)

    interactions = result.actions
    updateInteractions()

    return result
}