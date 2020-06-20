import React from 'react';
import './App.css';
import {Balance} from './Balance';
import {TransactionHistory} from'./TransactionHistory';
import {AccountSummary} from'./AccountSummary';
import {AddTransaction} from './AddTransaction';

function App() {
  return (
    <div>
     <Balance/>
     <TransactionHistory/>
     <AccountSummary/>
     <AddTransaction/>

    </div>
  );
}

export default App;
