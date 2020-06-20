import React, { useContext } from 'react'
// import Transaction Component
import {Transaction} from './Transaction';

// import the Global State
import {Globalcontext, GlobalContext} from './GlobalState';
export const TransactionHistory =() =>{
    const {Transactions} = useContext(GlobalContext);
    console.log(Transactions);
    return (
        <div>
            <h3>Transaction History
            </h3>
            <ul className="list">
            {Transactions.map(Transaction => (
               <Transaction key={Transaction.id} Transaction={Transaction}/> 
            ))}     
         </ul>
        </div>
    )
}