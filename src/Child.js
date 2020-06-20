import React from 'react';

function Child() {


    
return (
    <div className ="contaner">
    <h1 className="text-center">Expense Tracker</h1>
    <h3>Your Balance<br/>$260</h3>
    <div className ="expense-container">
    <h3>INCOME<br/>$500</h3>
    <h3>EXPENSE<br/>$240</h3>
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