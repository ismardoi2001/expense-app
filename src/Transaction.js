import React ,{useContext} from 'react'
import {GlobalContext} from './GlobalState';
import { TransactionProvider } from './transContext'

export const Transation = ({ Transation}) => {
    const {deleteTransaction} = useContext(GlobalContext);
const sign = transaction.amount < 0 ?'-': '+';
    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {Transaction.description}
       {transaction.text} <span>{sign}${Math.abs{transaction.amount}</span><button 
         onClick={()=> deleteTransactions(transaction.id)}className="detele-btn">X</button>
        </li>
    )
}