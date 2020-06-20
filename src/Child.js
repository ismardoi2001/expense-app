import React from 'react';

function Child() {
return (
    <div className ="container">
    <h1 className="text-center">Expense Tracker</h1>
    <h3>Your Balance<br/>$260</h3>
    <div className ="expense-container">
    <h3>INCOME<br/>$500</h3>
    <h3>EXPENSE<br/>$240</h3>
     </div>

     <h3>History</h3>
     <hr/>

     <h3>Add New Transcation</h3>
     <hr/>
     <form>
        <label>
            Enter Description <br/>
            <input type="text"/>
        </label>

        <label>
            Enter Amount<br/>
            <input type="number"/>
        </label>
        <input type="submit" value="Add Trnsaction"></input>
     </form>
     </div>
    );
}
export default Child;