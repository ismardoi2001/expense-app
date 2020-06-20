import React from 'react';
import './App.css';
import {Balance} from './Balance';
import {AccountSummary} from'./AccountSummary';
import {AddTransaction} from './AddTransaction';

function App() {
  return (

    <div className="body">
     <Balance/>
     <AccountSummary/>
     <AddTransaction/>

    </div>
  );
}

export default App;
