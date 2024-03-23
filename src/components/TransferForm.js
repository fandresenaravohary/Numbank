"use client"
import React from "react";
import { useForm } from "react-hook-form";

const TransferForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Implémenter la logique pour soumettre les données de virement
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
      <div className="p-4 max-w-xl w-auto flex flex-col justify-center items-center shadow-lg">
        <div className="mb-4 flex flex-col">
          <label htmlFor="amount">Amount :</label>
          <input
            id="amount"
            type="number"
            {...register("amount", { required: "Montant requis" })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="reason">Motif :</label>
          <input
            id="reason"
            type="text"
            {...register("reason", { required: "Motif requis" })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.reason && (
            <p className="text-red-500">{errors.reason.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="effectDate">Effective date :</label>
          <input
            id="effectDate"
            type="date"
            {...register("effectDate", { required: "Date requise" })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.effectDate && (
            <p className="text-red-500">{errors.effectDate.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="registerDate">Date of registration :</label>
          <input
            id="registerDate"
            type="date"
            {...register("registerDate", { required: "Date requise" })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.registerDate && (
            <p className="text-red-500">{errors.registerDate.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-64 mt-2"
        >
          Confirm the transfer
        </button>
      </div>
    </form>
  );
};

export default TransferForm;
