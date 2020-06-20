import React, {createContext,useReducer} from 'react'
//Create the initial state
const initialState = {
    transactions: [
        {id: 1, description: 'Project 1 Income',transactionamount: 1000},
        {id: 2, description: 'Project 2 Income',transactionamount: 2000},
        {id: 3, description: 'Project 3 Salary',transactionamount: -5000},
        {id: 4, description: 'Project 4 Salary',transactionamount: -1000}
    ]
}
//create the Global Context
export const GlobalContext = createContext(initialState);
//Create a Provider for the Global Context
export const Globalprovider = [{childern} => {
    const[state,disptach] = useReducer(AppReducer,initialState);
    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }
        {childern}
     </GlobalContext.Provider>
    );
}