import React, { useState, useEffect } from 'react';

function Transactions() {
    const [transactions, setTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [newTransaction, setNewTransaction] = useState({
        id: '',
        date: '',
        description: '',
        category: '',
        amount: ''
    });
    
    useEffect(() => {
        fetch('http://localhost:8002/transactions')
        .then((r) => r.json())
        .then((transactions) => setTransactions(transactions));
    }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setTransactions([...transactions, newTransaction]);
    setNewTransaction({
      id: '',
      date: '',
      description: '',
      category: '',
      amount: ''
    });
    fetch('http://localhost:8002/transactions', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTransaction),
    })
    .then((r) => r.json())
    .then((transactions) => setNewTransaction(transactions));
    }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

    return (
    <div className="App">
      <h1>Bank Transactions</h1>

      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={newTransaction.id} onChange={(e) => setNewTransaction({...newTransaction, id: e.target.value})} />
        </label>
        <label>
          Date:
          <input type="text" value={newTransaction.date} onChange={(e) => setNewTransaction({...newTransaction, date: e.target.value})} />
        </label>
        <label>
          Description:
          <input type="text" value={newTransaction.description} onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})} />
        </label>
        <label>
          Category:
          <input type="text" value={newTransaction.category} onChange={(e) => setNewTransaction({...newTransaction, category: e.target.value})} />
        </label>
        <label>
          Amount:
          <input type="text" value={newTransaction.amount} onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})} />
        </label>
        <button type="submit">Add Transaction</button>
        
      </form>
      
      <div className='searchbar'>
        <input type="text" placeholder="Search transactions" value={searchTerm} onChange={handleSearch} />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default Transactions;