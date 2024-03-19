const AccountList = ({ accounts, handleModifyAccount }) => {
    return (
      <div>
        <ul>
          {accounts.map(account => (
            <li key={account.id}>
              {account.firstName} {account.lastName} - {account.accountNumber}
            </li>
          ))}
        </ul>
        <button onClick={() => handleModifyAccount(account.id)}>Edit</button>
      </div>
    );
  };
  
export default AccountList;