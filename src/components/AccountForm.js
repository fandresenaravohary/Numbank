'use client';
import { useState } from 'react';

const AccountForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    salary: '',
    accountNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour envoyer les données au backend
    console.log(formData);
  };


    return (
      <form className="py-4 mt-4 mx-auto flex flex-row" onSubmit={handleSubmit}>
        <div className="border border-black p-4 max-w-xl w-96">
          <div className="mb-4 flex flex-col">
            <label htmlFor="firstName" className="text-black">
              FirstName
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 w-full h-12 border border-black"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="lastName" className="text-black">
              Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 w-full h-12 border border-black"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="birthDate" className="text-black">
              Birth Date
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="mt-1 w-full h-12 border border-black"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="salary" className="text-black">
              Net monthly salary
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="mt-1 w-full h-12 border border-black"
              required
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="accountNumber" className="text-black">
              Account number
            </label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              className="mt-1 w-full h-12 border border-black"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-48 mx-auto"
            >
              Add 
            </button>
          </div>
        </div>
        <div className=" bg-gray-400 flex flex-col justify-center items-center text-white py-12 px-6 md:py-24 md:px-12 max-w-xl w-96">
          <h2 className="text-4xl font-bold mb-2">Hello, Friend</h2>
          <div className="border-2 w-10 border-white inline-block mb-2"></div>
          <p className="mb-10">Welcome to NumBank</p>
        </div>
      </form>
    );
  };

export default AccountForm;
