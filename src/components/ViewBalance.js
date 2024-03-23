"use client"
import React, { useState } from "react";

const BalanceDisplay = ({ balances }) => {
  const currentDate = new Date().toISOString().split("T")[0]; // Obtenez la date actuelle au format YYYY-MM-DD
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleChangeDate = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <h2>Balance Display</h2>
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
          <option value={currentDate}>{currentDate}</option> {/* Ajoutez la date actuelle à la liste des options */}
        </select>
      </div>
      <div>
        <h3>Balance for {selectedDate}</h3>
        {balances[selectedDate] ? (
          <ul>
            <li>Main balance: {balances[selectedDate].principal}</li>
            <li>Loans: {balances[selectedDate].loans}</li>
            <li>Interest: {balances[selectedDate].interest}</li>
          </ul>
        ) : (
          <p>No balance data available for the selected date.</p>
        )}
      </div>
    </div>
  );
};

export default BalanceDisplay;
