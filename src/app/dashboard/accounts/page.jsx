"use client";
import { useState } from "react";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AccountForm = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    salary: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendFormDataToBackend = async (formData) => {
    try {
      const response = await axios.post('https://app.numbank.mg/accounts', formData);
      console.log(response.data);
      setAccounts((prevAccounts) => [...prevAccounts, response.data]);
    } catch (error) {
      console.error('An error occurred while sending the data to the backend:', error);
      alert('An error occurred while sending the data to the backend');
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const birthDate = new Date(formData.birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      today <
      new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
    ) {
      age--;
    }
    if (age < 21) {
      alert("Please, you must have 21 years");
      return;
    }

    sendFormDataToBackend(formData);
    setAccounts((prevState) => [...prevState, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      birthDate: "",
      salary: "",
      accountNumber: "",
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            id="salary"
            name="salary"
            placeholder="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            placeholder="account number"
            value={formData.accountNumber}
            onChange={handleChange}
            required
          />
          <button type="submit">Add</button>
        </form>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Liste des comptes:</h2>
        <table className={styles.table}>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <td>{account.firstName}</td>
                <td>{account.lastName}</td>
                <td>{account.birthDate}</td>
                <td>{account.salary}</td>
                <td>{account.accountNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountForm;
