"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const AccountForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('url_de_votre_api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Error during the creation');
      }
      reset();
      alert('Successful!');
    } catch (error) {
      console.error(error);
      alert('An error occurred when creating your account');
    }
  };

  return (
    <form className="py-4 mt-4 mx-auto flex flex-row items-center" onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-black p-4 max-w-xl w-96">
        <div className="mb-4 flex flex-col">
          <label htmlFor="firstName" className="text-black">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register('firstName', { required: true })}
            className="mt-1 w-full h-12 border border-black"
          />
          {errors.firstName && <span className="text-red-500">Please, enter your first name</span>}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="lastName" className="text-black">
            Nom
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register('lastName', { required: true })}
            className="mt-1 w-full h-12 border border-black"
          />
          {errors.lastName && <span className="text-red-500">Please, enter your last name</span>}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="birthDate" className="text-black">
            Date de naissance
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            {...register('birthDate', { required: true })}
            className="mt-1 w-full h-12 border border-black"
          />
          {errors.birthDate && <span className="text-red-500">Please, enter your birth date</span>}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="salary" className="text-black">
            Monthly salary
          </label>
          <input
            type="number"
            id="salary"
            name="salary"
            {...register('salary', { required: true })}
            className="mt-1 w-full h-12 border border-black"
          />
          {errors.salary && <span className="text-red-500">Please, enter your salary</span>}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="accountNumber" className="text-black">
            Account number
          </label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            {...register('accountNumber', { required: true })}
            className="mt-1 w-full h-12 border border-black"
          />
          {errors.accountNumber && <span className="text-red-500">Please, enter your account number</span>}
        </div>

        <div className="flex justify-center">
          <button type="submit" className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-48">
            Add an account
          </button>
        </div>
      </div>
    </form>
  );
};

export default AccountForm;