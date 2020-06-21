import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import {AccountSummary} from './AccountSummary';
import { IncomeExpenses } from './incomeExpense';
import { Transactionlist } from './Transactionlist';
import { AddTransaction } from './AddTransaction';

import { GlobalProvider } from './GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <AccountSummary/>
        <incomeExpense />
        <Transactionlist />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;