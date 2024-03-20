'use client';
import React, { useState } from 'react';

const WithdrawalForm = ({ accounts, onSubmit }) => {
  const [selectedAccount, setSelectedAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [overdraftEnabled, setOverdraftEnabled] = useState(false);

  const handleAccountChange = (e) => {
    setSelectedAccount(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const monthlySalary = selectedAccount.salary;
    const creditAuthorized = monthlySalary / 3;
  
    const totalAmountAvailable = selectedAccount.balance + creditAuthorized;
  
    if (totalAmountAvailable >= amount) {
      // Soumettre les données du formulaire au parent
      onSubmit({
        account: selectedAccount,
        amount: amount,
        date: date,
        time: time
      });

      alert("withdrawal successful")
    } else {
      alert("Insufficient funds. Please choose a lower amount.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="account">Account</label>
        <select id="account" value={selectedAccount} onChange={handleAccountChange}>
          {accounts.map(account => (
            <option key={account.id} value={account.id}>
              {account.firstName} {account.lastName} - {account.accountNumber}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount</label>
        <input 
          id="amount" 
          type="number" 
          value={amount} 
          onChange={handleAmountChange} 
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input 
          id="date" 
          type="date" 
          value={date} 
          onChange={handleDateChange} 
        />
      </div>
      <div>
        <label htmlFor="time">Time</label>
        <input 
          id="time" 
          type="time" 
          value={time} 
          onChange={handleTimeChange} 
        />
      </div>
      <div>
        <label htmlFor="overdraftEnabled">Enable overdraft</label>
        <input
          id="overdraftEnabled"
          type="checkbox"
          checked={overdraftEnabled}
          onChange={(e) => setOverdraftEnabled(e.target.checked)}
        />
      </div>
      <button type="submit">Confirm the withdrawal</button>
    </form>
  );
};

export default WithdrawalForm;

