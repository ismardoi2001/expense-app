import React from 'react';

function Child() {
    
return (
    <div className ="contaner">
    <h1 className="text-center">Expense Tracker By Muhammad Ismail </h1>
    
    <div className ="expense-container">
   
     </div>

     <h3>History</h3>
     <hr/>
    <ul className="transaction-list">
    <li>
    <span>Cash</span>
    <span>+500</span>
    </li>
    <li>
    <span>Cash</span>
    <span>+500</span>
    </li>
    <li>
    <span>Cash</span>
    <span>+500</span>
    </li>
    </ul>

     <h3>Add New Transcation</h3>
     <hr/>
     <form className="transation-form">
        <label>
            Enter Description <br/>
            <input type="text" required/>
        </label>
        <br/>
        <label>
            Enter Amount<br/>
            <input type="number" required/>
        </label>
        <br/>
        <input type="submit" value="Add Trnsaction"></input>
     </form>
     </div>
    );
}
export default Child;