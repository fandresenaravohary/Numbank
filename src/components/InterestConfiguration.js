"use client"
import React, { useState } from 'react';

const InterestConfiguration = () => {
  const [interest7Days, setInterest7Days] = useState(1);
  const [interestAfter7Days, setInterestAfter7Days] = useState(2);

  const handleInterest7DaysChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      if (value >= 0 && value <= 100) {
        setInterest7Days(value);
      } else {
        alert("Please enter a valid interest rate between 0 and 100.");
      }
    } else {
      alert("Please enter a valid number for the interest rate.");
    }
  };

  const handleInterestAfter7DaysChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      if (value >= 0 && value <= 100) {
        setInterestAfter7Days(value);
      } else {
        alert("Please enter a valid interest rate between 0 and 100.");
      }
    } else {
      alert("Please enter a valid number for the interest rate.");
    }
  };

  const handleSaveChanges = () => {
    //implémenter la logique pour enregistrer les valeurs des taux d'intérêt dans la base de donnée
    alert("Changes saved successfully!");
  };

  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor="interest7Days">Interest rate for the first 7 days (%)</label>
        <input
          id="interest7Days"
          type="number"
          value={interest7Days}
          onChange={handleInterest7DaysChange}
        />
      </div>
      <div>
        <label htmlFor="interestAfter7Days">Interest rate after 7 days (%)</label>
        <input
          id="interestAfter7Days"
          type="number"
          value={interestAfter7Days}
          onChange={handleInterestAfter7DaysChange}
        />
      </div>
      
    </div>
  );
};

export default InterestConfiguration;
