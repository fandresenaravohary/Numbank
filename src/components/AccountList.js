const AccountList = ({ accounts, handleModifyAccount }) => {
    return (
      <div>
        <h2>Lists of accounts</h2>
        <ul>
          {accounts.map(account => (
            <li key={account.id}>
              {account.nom} {account.prenom} - {account.numeroCompte}
              <button onClick={() => handleModifyAccount(account.id)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default AccountList;