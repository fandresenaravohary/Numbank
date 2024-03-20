const AccountList = ({ accounts, handleModifyAccount }) => {
  return (
    <div>
      <table className="border-t border-b w-96 border-gray-200">
        <thead>
          <tr>
            <th className="border-l border-r">First Name</th>
            <th className="border-l border-r">Last Name</th>
            <th className="border-l border-r">Account Number</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {accounts.map((account) => (
            <tr key={account.id} className="border-t border-gray-200">
              <td className="border-l border-r">{account.firstName}</td>
              <td className="border-l border-r">{account.lastName}</td>
              <td className="border-l border-r">{account.accountNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleModifyAccount(accounts.id)}>Edit</button>
    </div>
  );
};

export default AccountList;
