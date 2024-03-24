"use client";
import React from "react";
import { useForm } from "react-hook-form";

const InterestConfiguration = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  
  const onSubmit = (data) => {
    // Implémenter la logique pour enregistrer les valeurs des taux d'intérêt dans la base de données
    alert("Changes saved successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white">
      <div className="p-4 max-w-xl w-auto h-48 flex flex-col justify-center items-center shadow-lg">
        <div className="mb-4">
          <label htmlFor="interest7Days">Interest rate for the first 7 days (%)</label>
          <input
            id="interest7Days"
            type="number"
            {...register("interest7Days", {
              required: "Interest rate for the first 7 days is required",
              min: { value: 0, message: "Please enter a valid interest rate" },
              max: { value: 100, message: "Please enter a valid interest rate" }
            })}
            className="w-12 ml-2 border border-black"
          />
          {errors.interest7Days && <p className="text-red-500">{errors.interest7Days.message}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="interestAfter7Days">Interest rate after 7 days (%)</label>
          <input
            id="interestAfter7Days"
            type="number"
            {...register("interestAfter7Days", {
              required: "Interest rate after 7 days is required",
              min: { value: 0, message: "Please enter a valid interest rate" },
              max: { value: 100, message: "Please enter a valid interest rate" }
            })}
            className="w-12 ml-2 border border-black"
          />
          {errors.interestAfter7Days && <p className="text-red-500">{errors.interestAfter7Days.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-48 mt-4"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default InterestConfiguration;
