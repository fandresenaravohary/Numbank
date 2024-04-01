"use client"
import React from 'react';

const WithdrawalList = ({ withdrawals }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-3 ml-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {withdrawals.map((withdrawal) => (
        <div key={withdrawal.id} className="bg-gray-200 rounded-lg shadow-md p-4">
          <p className="text-lg font-semibold">Withdrawal</p>
          <p className="text-gray-600">Account: {withdrawal.account}</p>
          <p className="text-gray-600">Amount: {withdrawal.amount}</p>
          <p className="text-gray-600">Date: {withdrawal.date}</p>
          <p className="text-gray-600">Time: {withdrawal.time}</p>
          <p className="text-gray-600">Overdraft Enabled: {withdrawal.overdraftEnabled ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default WithdrawalList;
