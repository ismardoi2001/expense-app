import {Header} from './Header';
import {Balance} from './Balance';
import {incomeExpense} from './incomeExpense';
import {Transactionlist} from './Transactionlist';
import {AddTransaction} from './AddTransaction';

import {Globalprovider} from './GlobalState';
import './App.css';

function App() {
  return (
    <Globalprovider>
    <Header/>
   <div className="container">
     <Balance/>
     <incomeExpense/>
     <Transactionlist/>
     <AddTransaction/>
    </div>
    </Globalprovider>
  );
}

export default App;
