import React, {useContext} from 'react'
import {transaction} from './Transaction';

import {GlobalContext} from './GlobalState';

export const Transactionlist = () => {
 const {transactions} = useContext(GlobalContext);


    return (
        <div> 
        <h3>History</h3>
      <ul  className="list">
      {transactions.map(transaction => (<li className = "minus">
      {transaction.text} <span>-$200</span><button className="delete-btn">x</button>
        </li> ))}
      </ul>
        </div>
    )
}
