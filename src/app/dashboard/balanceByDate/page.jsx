"use client";
import React, { useState } from "react";
import axios from "axios";
import styles from "@/app/ui/dashboard/balance/balance.module.css";

const DateSelector = ({ onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [balances, setBalances] = useState(null);

  const handleChangeDate = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/balance/{accountid}`
      );
      setBalances(response.data);
    } catch (error) {
      console.error("Error fetching balances:", error);
    }
  };

  return (
    <div>
      <h2>Select Date to Check Balance</h2>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.section}>
            <label htmlFor="startDateTime">Choose a start date: </label>
            <input
              type="date"
              id="startDateTime"
              value={selectedDate}
              onChange={handleChangeDate}
            />
          </div>
          <div className={styles.section}>
            <label htmlFor="endDateTime">Choose an end date: </label>
            <input
              type="date"
              id="endDateTime"
              value={selectedDate}
              onChange={handleChangeDate}
            />
          </div>
          <button type="submit">Check Balance</button>
        </form>
      </div>

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
