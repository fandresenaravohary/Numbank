"use client"
import React from "react";
import { useForm } from "react-hook-form";

const TransferForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const reference = generateUniqueReference();
    data.reference = reference;
    // Implémenter la logique pour soumettre les données de virement
    console.log(data);
  };

  const generateUniqueReference = () => {
     // Logique pour générer la référence unique (par exemple: UUID)
    return "VIR_" + new Date().toISOString();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
      <div className="p-4 max-w-xl w-auto flex flex-col justify-center items-center shadow-lg">
        <div className="mb-4 flex flex-col">
          <label htmlFor="amount">Amount :</label>
          <input
            id="amount"
            type="number"
            {...register("amount", { required: "Amount required" })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="reason">Reason :</label>
          <input
            id="reason"
            type="text"
            {...register("reason", { required: "Reason required" })}
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
            {...register("effectDate", { required: "Date required" })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.effectDate && (
            <p className="text-red-500">{errors.effectDate.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="registerDate">Registration date :</label>
          <input
            id="registerDate"
            type="date"
            {...register("registerDate", { required: "Date required" })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.registerDate && (
            <p className="text-red-500">{errors.registerDate.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="recipientAccount">Recipient account :</label>
          <select
            id="recipientAccount"
            {...register("recipientAccount", { required: "Account required" })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          >
            <option value="">Select recipient account</option>
            <option value="sameBank">Same bank (X)</option>
            <option value="otherBank">Other bank (BMOI)</option>
          </select>
          {errors.recipientAccount && (
            <p className="text-red-500">{errors.recipientAccount.message}</p>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="groupTransfer">Group transfer / Scheduled :</label>
          <input
            id="groupTransfer"
            type="checkbox"
            {...register("groupTransfer")}
            className="mt-1"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-64 mt-2"
        >
          Confirm transfer
        </button>
      </div>
    </form>
  );
};

export default TransferForm;
