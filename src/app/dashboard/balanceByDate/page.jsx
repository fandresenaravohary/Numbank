"use client"
import React, { useState } from 'react';

const DateSelector = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [balances, setBalances] = useState(null);

  const handleChangeDate = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/balances/${selectedDate}`);
      setBalances(response.data);
    } catch (error) {
      console.error('Error fetching balances:', error);
    }
  };

  return (
    <div>
      <h2>Select Date to Check Balance</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="dateSelect">Choose a date: </label>
        <input
          type="date"
          id="dateSelect"
          value={selectedDate}
          onChange={handleChangeDate}
        />
        <button type="submit">Check Balance</button>
      </form>

      {balances && (
        <div>
          <h2>Balance for {selectedDate}</h2>
          <ul>
            <li>Main balance: {balances.principal}</li>
            <li>Loans: {balances.loans}</li>
            <li>Interest: {balances.interest}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DateSelector;
