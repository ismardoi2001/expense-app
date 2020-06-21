import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
//Create the initial state
const initialState = {
    transactions: []
}
//create the Global Context
export const GlobalContext = createContext(initialState);
//Create a Provider for the Global Context
export const Globalprovider = ({childern}) => {
    const[state,disptach] = useReducer(AppReducer,initialState);
    //Actions
    function deleteTransactions(id) {
        disptach({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransactions(transaction) {
        disptach({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }


    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
                deleteTransaction
            }}>
        {childern}
     </GlobalContext.Provider>

}