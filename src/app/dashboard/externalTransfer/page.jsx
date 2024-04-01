"use client"
import React, { useState } from "react";
import styles from '@/app/ui/dashboard/products/addProduct/addProduct.module.css'

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
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.section}>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
            {!formData.amount && <p className="text-red-500">Please enter the amount.</p>}
          </div>
          <div className={styles.section}>
            <label htmlFor="reason">Reason</label>
            <input
              id="reason"
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
            />
            {!formData.reason && <p className="text-red-500">Please enter the reason for the transfer.</p>}
          </div>
          <div className={styles.section}>
            <label htmlFor="effectiveDate">Effective Date</label>
            <input
              id="effectiveDate"
              type="date"
              name="effectiveDate"
              value={formData.effectiveDate}
              onChange={handleChange}
            />
            {!formData.effectiveDate && <p className="text-red-500">Please enter the effective date.</p>}
          </div>
          <div className={styles.section}>
            <label htmlFor="registrationDate">Registration Date</label>
            <input
              id="registrationDate"
              type="date"
              name="registrationDate"
              value={formData.registrationDate}
              onChange={handleChange}
            />
            {!formData.registrationDate && <p className="text-red-500">Please enter the registration date.</p>}
          </div>
          <button
            type="submit"
            className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-64 mt-2"
          >
            Submit Transfer
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExternalTransferForm;