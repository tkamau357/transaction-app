import './App.css';
import React, { useState } from 'react';
import Transactions from './components/Transactions';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleDelete = (id) => {
    const filteredTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(filteredTransactions);
  };
  return (
    <div className="App">
      <Transactions
      handleDelete={handleDelete}
      />
    </div>
  )

}

export default App;
