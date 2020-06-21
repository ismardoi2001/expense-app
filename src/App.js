import {Header} from './Header';
import './App.css';
import {Balance} from './Balance';
import {incomeExpense} from './incomeExpense';
import {Transactionlist} from './Transactionlist';
import {AddTransaction} from './AddTransaction';

function App() {
  return (
    <div className="body">
    <Header/>
     <Balance/>
     <incomeExpense/>
     <Transactionlist/>
     <AddTransaction/>
    </div>
  );
}

export default App;
