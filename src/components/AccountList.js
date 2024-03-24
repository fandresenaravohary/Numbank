import { accountList } from '@/app/data';
import React from 'react';

const AccountList = ({ accounts, handleModifyAccount }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-3 ml-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {accounts.map((account) => (
        <div key={account.id} className="bg-gray-200 rounded-lg shadow-md p-4">
          <h2 className="text-lg font-semibold">{account.firstName} {account.lastName}</h2>
          <p className="text-gray-600">Salary: {account.salary}</p>
          <p className="text-gray-600">Account Number: {account.accountNumber}</p>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600" onClick={handleModifyAccount(account.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default AccountList;