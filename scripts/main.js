import { htmlForRender } from "./htmlForRender.js"


document.addEventListener("stateChanged", e => {
    console.log("Things have changed around here")
    htmlForRender()
})



htmlForRender()

