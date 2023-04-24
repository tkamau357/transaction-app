import React, { useState, useEffect } from 'react';

function Transactionfilter() {
    const [transactions, deleteTransaction] = useState([]);
    const [newTransaction, setNewTransaction] = useState;

  function handleDeleteClick(e) {
    e.preventDefault();
    setTransactions([...transactions, deleteTransaction]);
    setNewTransaction({
        id: '',
        date: '',
        description: '',
        category: '',
        amount: ''
    });
    fetch(`http://localhost:8002/transactions/${transaction.id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(deleteTransaction),
    })
    .then((r) => r.json())
    .then((transactions) => setNewTransaction(transactions));
   }

    return (
        <div>
            <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
        </div>
    )

}

export default Transactionfilter;