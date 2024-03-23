"use client"
import React from "react";
import { useForm } from "react-hook-form";

const ExternalTransferForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="bg-white">
      <div className="p-4 max-w-xl w-96 flex flex-col justify-center items-center shadow-lg">
        <div className="mb-4 flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            {...register("amount", { required: true })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.amount && <p className="text-red-500">Please enter the amount.</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="reason">Reason</label>
          <input
            id="reason"
            type="text"
            {...register("reason", { required: true })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.reason && <p className="text-red-500">Please enter the reason for the transfer.</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="effectiveDate">Effective Date</label>
          <input
            id="effectiveDate"
            type="date"
            {...register("effectiveDate", { required: true })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.effectiveDate && <p className="text-red-500">Please enter the effective date.</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="registrationDate">Registration Date</label>
          <input
            id="registrationDate"
            type="date"
            {...register("registrationDate", { required: true })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.registrationDate && <p className="text-red-500">Please enter the registration date.</p>}
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
