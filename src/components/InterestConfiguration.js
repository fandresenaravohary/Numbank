"use client";
import React, { useState } from "react";

const InterestConfiguration = () => {
  const [interest7Days, setInterest7Days] = useState(1);
  const [interestAfter7Days, setInterestAfter7Days] = useState(2);
  const [error7Days, setError7Days] = useState("");
  const [errorAfter7Days, setErrorAfter7Days] = useState("");

  const handleInterest7DaysChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      if (value >= 0 && value <= 100) {
        setInterest7Days(value);
        setError7Days("");
      } else {
        setError7Days("Please enter a valid interest rate between 0 and 100.");
      }
    } else {
      setError7Days("Please enter a valid number for the interest rate.");
    }
  };

  const handleInterestAfter7DaysChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      if (value >= 0 && value <= 100) {
        setInterestAfter7Days(value);
        setErrorAfter7Days("");
      } else {
        setErrorAfter7Days("Please enter a valid interest rate between 0 and 100.");
      }
    } else {
      setErrorAfter7Days("Please enter a valid number for the interest rate.");
    }
  };

  const handleSaveChanges = () => {
    // Implémenter la logique pour enregistrer les valeurs des taux d'intérêt dans la base de données
    alert("Changes saved successfully!");
  };

  return (
    <form className="bg-white">
      <div className="p-4 max-w-xl w-auto h-48 flex flex-col justify-center items-center shadow-lg">
        <div className="mb-4">
          <label htmlFor="interest7Days">Interest rate for the first 7 days (%)</label>
          <input
            id="interest7Days"
            type="number"
            value={interest7Days}
            onChange={handleInterest7DaysChange}
            className="w-12 ml-2 border border-black"
          />
          {error7Days && <p className="text-red-500">{error7Days}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="interestAfter7Days">Interest rate after 7 days (%)</label>
          <input
            id="interestAfter7Days"
            type="number"
            value={interestAfter7Days}
            onChange={handleInterestAfter7DaysChange}
            className="w-12 ml-2 border border-black"
          />
          {errorAfter7Days && <p className="text-red-500">{errorAfter7Days}</p>}
        </div>
        <button
          type="button"
          onClick={handleSaveChanges}
          className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-48 mt-4"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default InterestConfiguration;