import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Computer', amount: -250 },
        { id: 2, text: 'Salary', amount: 905 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: -150 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider Component
function GlobalProvider({children}) {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{transactions: state.transactions}}>
                {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;