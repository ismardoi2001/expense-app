import React, { Children } from 'react';
import './App.css';
import {Child} from './Child';
import {Balance} from './Balance';
import {AccountSummary} from'./AccountSummary';
import {AddTransaction} from './AddTransaction';

function App() {
  return (

    <div className="body">
    <Child/>
     <Balance/>
     <AccountSummary/>
     <AddTransaction/>

    </div>
  );
}

export default App;
