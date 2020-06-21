import {Header} from './Header';
import React, { Children } from 'react';
import './App.css';
import {Balance} from './Balance';
import {incomeExpense} from './incomeExpense';
import {Transactionlist} from './Transactionlist';
import {AccountSummary} from'./AccountSummary';
import {AddTransaction} from './AddTransaction';


function App() {
  return (

    <div className="body">
    <Header/>
     <Balance/>
     <incomeExpense/>
     <Transactionlist/>
     <AccountSummary/>
     <AddTransaction/>
    </div>
  );
}

export default App;
