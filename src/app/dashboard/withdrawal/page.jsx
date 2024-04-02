"use client"
import React, { useState } from "react";
import styles from '@/app/ui/dashboard/withdrawal/withdrawal.module.css';

const WithdrawalForm = ({ accounts }) => {
  const [withdrawals, setWithdrawals] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    label: "",
    dateEffect: "",
    saveDate: "",
    extern: false,
    status: false,
    categoryId: "",
    accountId: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedAccount = accounts?.find(
      (account) => account.id === parseInt(formData.accountId)
    );

    if (!selectedAccount) {
      alert("Selected account not found in provided accounts list.");
      return;
    }

    const totalAmountAvailable =
      selectedAccount.balance + selectedAccount.salary / 3;

    if (
      totalAmountAvailable >= parseFloat(formData.amount) ||
      formData.overdraftEnabled
    ) {
      const newWithdrawal = {
        accountId: formData.accountId,
        amount: parseFloat(formData.amount),
        dateEffect: formData.dateEffect,
        saveDate: formData.saveDate,
        extern: formData.extern,
        status: formData.status,
        categoryId: formData.categoryId,
      };
      setWithdrawals((prevWithdrawals) => [...prevWithdrawals, newWithdrawal]);
      alert("Withdrawal completed successfully");
      setFormData({
        amount: "",
        label: "",
        dateEffect: "",
        saveDate: "",
        extern: false,
        status: false,
        categoryId: "",
        accountId: "",
      });
    } else {
      alert(
        "Insufficient funds. Please choose a lower amount or activate the authorised overdraft."
      );
    }
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
                </div>
                <div className={styles.section}>
                <label htmlFor="label">Label</label>
                <input
                    id="label"
                    type="text"
                    name="label"
                    value={formData.label}
                    onChange={handleChange}
                />
                </div>
                <div className={styles.section}>
                <label htmlFor="dateEffect">Effective date</label>
                <input
                    id="dateEffect"
                    type="date"
                    name="dateEffect"
                    value={formData.dateEffect}
                    onChange={handleChange}
                />
                </div>
                <div className={styles.section}>
                <label htmlFor="saveDate">Save date</label>
                <input
                    id="saveDate"
                    type="date"
                    name="saveDate"
                    value={formData.saveDate}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="extern">Extern</label>
                <input
                    id="extern"
                    type="checkbox"
                    name="extern"
                    checked={formData.extern}
                    onChange={handleChange}
                />
                </div>
                <div>
                <label htmlFor="status">Status</label>
                <input
                    id="status"
                    type="checkbox"
                    name="status"
                    checked={formData.status}
                    onChange={handleChange}
                />
                </div>
                <div className={styles.section}>
                <label htmlFor="categoryId">Category ID</label>
                <select
                    id="categoryId"
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChange}
                >
                    <option value="">Select a category</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                </div>
                <div className={styles.section}>
                <label htmlFor="accountId">Account ID</label>
                <input
                    id="accountId"
                    type="text"
                    name="accountId"
                    value={formData.accountId}
                    onChange={handleChange}
                />
                </div>
                <div className={styles.section}>
                <button type="submit">Confirm withdrawal</button>
                </div>
            </form>
        </div>
        <div className={styles.container}>
            <h2>List of Withdrawals</h2>
            {withdrawals?.map((withdrawal, index) => (
                <div key={index} className="border p-2 m-2">
                    <p>Account ID: {withdrawal.accountId}</p>
                    <p>Amount: {withdrawal.amount}</p>
                    <p>Date Effect: {withdrawal.dateEffect}</p>
                    <p>Save Date: {withdrawal.saveDate}</p>
                    <p>Extern: {withdrawal.extern.toString()}</p>
                    <p>Status: {withdrawal.status.toString()}</p>
                    <p>Category ID: {withdrawal.categoryId}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default WithdrawalForm;
