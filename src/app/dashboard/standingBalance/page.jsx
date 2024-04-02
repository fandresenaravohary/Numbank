import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/app/ui/dashboard/balance/balance.module.css";

const BalanceDisplay = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [balances, setBalances] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/balances/${selectedDate}`);
        setBalances(response.data);
      } catch (error) {
        console.error("Error fetching balances:", error);
      }
    };

    fetchData();
  }, [selectedDate]);

  const handleChangeDate = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.section}>
            <label htmlFor="dateSelect">Choose a date: </label>
            <select
              id="dateSelect"
              value={selectedDate}
              onChange={handleChangeDate}
            >
              {balances &&
                Object.keys(balances).map((date) => (
                  <option key={date} value={date}>
                    {date}
                  </option>
                ))}
              <option value={currentDate}>{currentDate}</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <h3>Balance for {selectedDate}</h3>
        {balances && balances[selectedDate] ? (
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
