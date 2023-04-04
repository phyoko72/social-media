import {createContext, useReducer, useState} from "react"

export const DataContext = createContext()

const usingDispatch = {
    ADD: "INCREMENT",
    MINUS: "DECREMENT",
    PUSH: "ADD_TEXT",
}

const initialState = {
    num: 0,
    text: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case usingDispatch.ADD:
            return {...state, num: state.num + 1}
        case usingDispatch.MINUS:
            return {...state, num: state.num - 1}
        case usingDispatch.PUSH:
            return {...state, text: [...state.text, action.payload]}
        default:
            return state
    }
}

export const DataContextProvider = ({children}) => {
    const [someText, setSomeText] = useState("hello world")

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log("State: ", state)

    return (
        <DataContext.Provider
            value={{someText, setSomeText, state, dispatch, usingDispatch}}
        >
            {children}
        </DataContext.Provider>
    )
}
