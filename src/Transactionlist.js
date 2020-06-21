import React from 'react'

export const Transactionlist = () => {
    return (
        <div> 
        <h3>History</h3>
      <ul  className="list">
        <li className="minus">
          Cash <span>-$200</span><button class="delete-btn">x</button>
        </li> 
      </ul>
        </div>
    )
}
