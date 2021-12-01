import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
    transactions: []
}

// Create context 
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    // useReducer Hook
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Delete ACTION ( Dispatch To AppReducer )
    function deleteTransaction(id) {
        // (Also needs to be passed in the Provider value)
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    // Add ACTION ( Dispatch To AppReducer )
    function addTransaction(transaction) {
        // (also needs to be passed in the Provider value)
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return(
        <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
                {children}
        </GlobalContext.Provider>
    )
}

// Chaque objet Contexte est livré avec un composant React Provider 
// qui permet aux composants consommateurs de s’abonner aux mises à jour du contexte.

