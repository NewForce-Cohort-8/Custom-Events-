
const database ={








    tState: {
        count: 0,
        words: ""
    }
}


export const getState = () =>  {
   const state = {...database.tState}
   return state}

export const setCount = (number) => {
    database.tState.count = number 
    document.dispatchEvent(new CustomEvent("stateChanged"))

}
export const setWords = (text) => {
    database.tState.words = text 
    console.log("current state of state", database.tState.words)
    document.dispatchEvent(new CustomEvent("stateChanged"))

}