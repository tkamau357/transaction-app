import React, { useState, useEffect } from 'react';

function Transactiondelete() {
    const [transactions, removeTransaction] = useState([]);
    const [setTransaction, deletedTransaction] = useState;

  function handleDeleteClick(e) {
    e.preventDefault();
    setTransaction([...transactions, removeTransaction]);
    deletedTransaction({
        id: '',
        date: '',
        description: '',
        category: '',
        amount: ''
    });
    fetch(`http://localhost:8002/transactions/${transactions.id}`, {
        method: "DELETE", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(removeTransaction),
    })
    .then((r) => r.json())
    .then((transactions) => deletedTransaction(transactions));
   }

    return (
        <div>
            <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
        </div>
    )

}

export default Transactiondelete;