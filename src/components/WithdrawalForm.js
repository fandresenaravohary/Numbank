"use client";
import React from "react";
import { useForm } from "react-hook-form";

const WithdrawalForm = ({ accounts, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { amount: "", date: "", time: "", overdraftEnabled: false } });

  const handleSubmitForm = (data) => {
    const selectedAccount = accounts.find(
      (account) => account.id === data.account
    );

    if (!selectedAccount) {
      // Handle error: Account not found
      console.error("Selected account not found in provided accounts list.");
      return;
    }

    const monthlySalary = selectedAccount.salary;
    const creditAuthorized = monthlySalary / 3;

    const totalAmountAvailable = selectedAccount.balance + creditAuthorized;

    if (totalAmountAvailable >= data.amount) {
      // Submit form data
      onSubmit({
        ...data,
      });

      alert("Retrait effectué avec succès");
    } else {
      alert("Fonds insuffisants. Veuillez choisir un montant inférieur.");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="bg-white">
      <div className="p-4 max-w-xl w-96 flex flex-col justify-center items-center shadow-lg">
        <div className="mb-4 flex flex-col">
          <label htmlFor="account">Account:</label>
          <select
            id="account"
            {...register("account", { required: true })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          >
            {accounts.map((account) => (
              <option key={account.id} value={account.id}>
                {account.firstName} {account.lastName} - {account.accountNumber}
              </option>
            ))}
          </select>
          {errors.account && <p className="text-red-500">{errors.account.message}</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            name="amount"
            {...register("amount", { required: true })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            {...register("date", { required: true })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.date && <p className="text-red-500">{errors.date.message}</p>}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="time">Time</label>
          <input
            id="time"
            type="time"
            name="time"
            {...register("time", { required: true })}
            className="mt-1 w-80 h-10 border border-black pl-2"
          />
          {errors.time && <p className="text-red-500">{errors.time.message}</p>}
        </div>
        <div>
          <label htmlFor="overdraftEnabled">Activate overdraft</label>
          <input
            id="overdraftEnabled"
            type="checkbox"
            name="overdraftEnabled"
            {...register("overdraftEnabled")}
            className="ml-1"
          />
        </div>
        <button
          type="submit"
          className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-64 mt-2"
        >
          Confirm the withdrawal
        </button>
      </div>
    </form>
  );
};

export default WithdrawalForm;
