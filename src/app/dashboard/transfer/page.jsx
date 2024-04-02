"use client";
import React, { useState } from "react";
import axios from 'axios';
import styles from "@/app/ui/dashboard/transfers/transfer.module.css";
import AccountForm from "../accounts/page";

const TransferForm = ({accounts}) => {
  const [transfers, setTransfers] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    reason: "",
    dateEffect: "",
    saveDate: "",
    extern: false,
    status: false,
    accountIdSender: "",
    accountIdRecipient: "",
  });

  const [cancelledTransferId, setCancelledTransferId] = useState(null);

  const handleCancel = (transferId) => {
    setTransfers(prevTransfers =>
      prevTransfers.map(transfer =>
        transfer.id === transferId ? { ...transfer, status: "cancelled" } : transfer
      )
    );
    setCancelledTransferId(transferId);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const reference = generateUniqueReference();
    const dataWithReference = { ...formData, reference, id: Date.now(), status: "pending" };
    setTransfers((prevTransfers) => [...prevTransfers, dataWithReference]);
    setFormData({
      amount: "",
      reason: "",
      dateEffect: "",
      saveDate: "",
      extern: false,
      status: false,
      accountIdSender: "",
      accountIdRecipient: "",
    });

    axios.post('http://localhost:8080/transactions/transfert', dataWithReference)
      .then(response => {
        setTransfers((prevTransfers) => prevTransfers.map(transfer =>
          transfer.id === dataWithReference.id ? { ...transfer, status: "done" } : transfer
        ));
      })
      .catch(error => {
        console.error('Error submitting transfer:', error);
      });
  };

  const generateUniqueReference = () => {
    return "VIR_" + new Date().toISOString();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
        <div className={styles.container}>
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.section}>
                <label htmlFor="amount">Amount :</label>
                <input
                    id="amount"
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className={styles.section}>
                <label htmlFor="reason">Reason :</label>
                <input
                    id="reason"
                    type="text"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className={styles.section}>
                <label htmlFor="dateEffect">Effective date :</label>
                <input
                    id="dateEffect"
                    type="date"
                    name="dateEffect"
                    value={formData.dateEffect}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className={styles.section}>
                <label htmlFor="saveDate">Registration date :</label>
                <input
                    id="saveDate"
                    type="date"
                    name="saveDate"
                    value={formData.saveDate}
                    onChange={handleChange}
                    required
                />
                </div>
                <div>
                  <label htmlFor="extern">Extern :</label>
                  <input
                      id="extern"
                      type="checkbox"
                      name="extern"
                      checked={formData.extern}
                      onChange={handleChange}
                  />
                </div>
                <div className="ml-6">
                  <label htmlFor="status">status :</label>
                  <input
                      id="status"
                      type="checkbox"
                      name="status"
                      checked={formData.status}
                      onChange={handleChange}
                  />
                </div>
                <div className={styles.section}>
                  <label htmlFor="accountIdSender">accountIdSender :</label>
                  <select
                      id="accountIdSender"
                      name="accountIdSender"
                      value={formData.accountIdSender}
                      onChange={handleChange}
                      required
                  >
                      <option value="">Select Sender Account</option>
                      {accounts?.map((account) => (
                      <option key={account.id} value={account.id}>
                          {account.customerFirstName} {account.customerLastName} - {account.number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.section}>
                  <label htmlFor="accountIdRecipient">accountIdRecipient :</label>
                  <select
                      id="accountIdRecipient"
                      name="accountIdRecipient"
                      value={formData.accountIdRecipient}
                      onChange={handleChange}
                      required
                  >
                      <option value="">Select Recipient Account</option>
                      {accounts?.map((account) => (
                      <option key={account.id} value={account.id}>
                          {account.customerFirstName} {account.customerLastName} - {account.number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.section}>
                <button type="submit">Confirm transfer</button>
                </div>
            </form>  
        </div>
        <div className={styles.container}>
          <h2>Lists of transfers</h2>
          {transfers.map((transfer) => (
            <div key={transfer.id} className="border p-4 my-2">
              <p>Amount : {transfer.amount}</p>
              <p>Reason : {transfer.reason}</p>
              <p>Effective Date : {transfer.dateEffect}</p>
              <p>Registration date : {transfer.saveDate}</p>
              {transfer.status === "done" ? (
                <p>Status : Done</p>
              ) : (
                <>
                  <p>Status : Loading</p>
                  {new Date(transfer.dateEffect) > new Date() && (
                    <button onClick={() => handleCancel(transfer.id)}>
                      Cancel
                    </button>
                  )}
                  {cancelledTransferId === transfer.id && (
                    <p>Transfer cancelled</p>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
    </div>
  );
};

export default TransferForm;
