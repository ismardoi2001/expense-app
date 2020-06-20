import React from 'react'
import { TransactionProvider } from './transContext'

export const Transation = ({ Transation}) => {
    return (
        <li className="plus">
        {Transaction.description}
        <span> {transaction.transactionamount}</span>
        <button className="detele-btn">X</button>
        </li>
    )
}