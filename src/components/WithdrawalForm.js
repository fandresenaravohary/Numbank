"use client";
import React, { useState } from "react";

const WithdrawalForm = ({ accounts, onSubmit }) => {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
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
        time: time,
      });

      alert("withdrawal successful");
    } else {
      alert("Insufficient funds. Please choose a lower amount.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white">
      <div className="p-4 max-w-xl w-96 flex flex-col justify-center items-center shadow-lg">
        <div className="mb-4 flex flex-col">
          <label htmlFor="account">Account: </label>
          <select
            id="account"
            value={selectedAccount}
            onChange={handleAccountChange}
            className="mt-1 w-80 h-10 border border-black pl-2"
          >
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.firstName} {account.lastName} - {account.accountNumber}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={handleDateChange}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            value={time}
            onChange={handleTimeChange}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
        </div>
        <div>
          <label htmlFor="overdraftEnabled">Enable overdraft</label>
          <input
            id="overdraftEnabled"
            type="checkbox"
            checked={overdraftEnabled}
            onChange={(e) => setOverdraftEnabled(e.target.checked)}
            className="ml-1"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-64 mt-2"
        >
          Confirm the withdrawal
        </button>
      </div>
    </form>
  );
};

export default WithdrawalForm;
