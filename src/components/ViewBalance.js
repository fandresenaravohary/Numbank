"use client"
import React, { useState } from "react";

const BalanceDisplay = ({ balances }) => {
  const [selectedDate, setSelectedDate] = useState(Object.keys(balances)[0]);

  const handleChangeDate = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <h2>Sold</h2>
      <div>
        <label htmlFor="dateSelect">Choose a date: </label>
        <select
          id="dateSelect"
          value={selectedDate}
          onChange={handleChangeDate}
        >
          {Object.keys(balances).map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
      {balances[selectedDate] && (
        <ul>
          <li>Main balance: {balances[selectedDate].principal}</li>
          <li>Loans: {balances[selectedDate].loans}</li>
          <li>Interest: {balances[selectedDate].interest}</li>
        </ul>
      )}
    </div>
  );
};

export default BalanceDisplay;