import { getState, setCount, setWords } from "./database.js"

export const htmlForRender = () =>{
    //gets current version of state
    const state = getState()
    
    const main = document.querySelector("#container")
 
    main.innerHTML = `
    <button id="submit">Click to add</button>
    <h1>${state.count}</h1>
    <button id="button">Click to subtract</button>
    <div>
    <div class="stuff">
    <input type="text" name="words" id="typeingSpace"  placeholder="type words here"/>
    <p>${state.words}</p>
    </div>
    <button id="save">Save text</button>
    </div>




    `
    
}


//listens for a  button click, sets state in DB and Dispatches change event 
    document.addEventListener("click", e => {
        //makes copy of state from Db
        const state = getState()

        const newState = {...state}
    
    
        if(e.target.id === "submit"){
            console.log("click is working")
            newState.count++

        // set new state value in Db
        setCount(newState.count)

                    //Custom Event Signal
    
        }

        if (e.target.id === "button") {
            newState.count--    

        // set new state value in Db
            setCount(newState.count)
            
                    //Custom Event Signal
    
        }
        if (e.target.id === "save") {
            newState.words = document.querySelector("#typeingSpace").value

        // set new state value in Db
            setWords(newState.words)

                    //Custom Event Signal
    
        }

    })
 
