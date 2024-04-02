"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import { get } from "react-hook-form";

const AccountForm = () => {
  const [accounts, setAccounts] = useState([]);
  const [formData, setFormData] = useState({
    customerFirstName: "",
    customerLastName: "",
    birthdate: "",
    netSalary: "",
    number: "",
    debt: false,
  });

  const getAllAccounts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/accounts");
      setAccounts(response.data);
      console.log(accounts);
    } catch (error) {
      console.error("An error backend:", error);
    }
  };

  useEffect(() => {
    getAllAccounts();
  }, [accounts]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const sendFormDataToBackend = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/accounts",
        formData
      );
      console.log(response.data);
      setAccounts((prevAccounts) => [...prevAccounts, response.data]);
    } catch (error) {
      console.error(
        "An error occurred while sending the data to the backend:",
        error
      );
      alert("An error occurred while sending the data to the backend");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const birthDate = new Date(formData.birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      today <
      new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())
    ) {
      age--;
    }
    if (age < 21) {
      alert("Please, you must be at least 21 years old");
      return;
    }

    sendFormDataToBackend(formData);
    setFormData({
      customerFirstName: "",
      customerLastName: "",
      birthdate: "",
      netSalary: "",
      number: "",
      debt: false,
    });
  };

  return (
    <div>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            id="customerFirstName"
            name="customerFirstName"
            placeholder="First Name"
            value={formData.customerFirstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="customerLastName"
            name="customerLastName"
            placeholder="Last Name"
            value={formData.customerLastName}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            id="netSalary"
            name="netSalary"
            placeholder="Net Salary"
            value={formData.netSalary}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="number"
            name="number"
            placeholder="Account Number"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <div>
            <label htmlFor="debt">Debt:</label>
            <input
              type="checkbox"
              id="debt"
              name="debt"
              checked={formData.debt}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Accounts List:</h2>
        <table className={styles.table}>
          <tbody>
            {accounts.map((account, index) => (
              <tr key={index}>
                <td>{account.customerFirstName}</td>
                <td>{account.customerLastName}</td>
                <td>{account.birthdate}</td>
                <td>{account.netSalary}</td>
                <td>{account.number}</td>
                <td>{account.debt ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountForm;
