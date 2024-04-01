"use client"
import React, { useState } from "react";

const ExternalTransferForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    amount: "",
    reason: "",
    effectiveDate: "",
    registrationDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white">
      <div className="p-4 max-w-xl w-96 flex flex-col justify-center items-center shadow-lg">
        <div className="mb-4 flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {!formData.amount && <p className="text-red-500">Please enter the amount.</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="reason">Reason</label>
          <input
            id="reason"
            type="text"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {!formData.reason && <p className="text-red-500">Please enter the reason for the transfer.</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="effectiveDate">Effective Date</label>
          <input
            id="effectiveDate"
            type="date"
            name="effectiveDate"
            value={formData.effectiveDate}
            onChange={handleChange}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {!formData.effectiveDate && <p className="text-red-500">Please enter the effective date.</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="registrationDate">Registration Date</label>
          <input
            id="registrationDate"
            type="date"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {!formData.registrationDate && <p className="text-red-500">Please enter the registration date.</p>}
        </div>
        <button
          type="submit"
          className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-64 mt-2"
        >
          Submit Transfer
        </button>
      </div>
    </form>
  );
};

export default ExternalTransferForm;
