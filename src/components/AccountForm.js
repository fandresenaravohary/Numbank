'use client';
import { useForm } from 'react-hook-form';

const AccountForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Envoi des données à l'API
    console.log(data);
  };

  return (
    <form className="py-4 mt-4 mx-auto flex flex-row" onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-black p-4 max-w-xl w-96">

        <div className="mb-4 flex flex-col">
          <label htmlFor="firstName" className="text-black">
            FirstName
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            {...register('firstName', { required: true })}
            className="mt-1 w-full h-12 border border-black"
          />
          {errors.firstName && <span className="text-red-500">Please, enter your firstName</span>}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="lastName" className="text-black">
            Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            {...register('lastName', { required: true })}
            className="mt-1 w-full h-12 border border-black"
          />
          {errors.lastName && <span className="text-red-500">Please, enter your name</span>}
        </div>

        <div className="mb-4 flex flex-col">
          <label htmlFor="birthDate" className="text-black">
            Birth Date
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
            Salaire mensuel net
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
            Numéro de compte unique
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
          <button type="submit" className="bg-gray-400 p-3 text-white font-bold hover:bg-gray-600 w-48 mx-auto">
            Add an account
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
