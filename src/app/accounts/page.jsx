import React from 'react';
import AccountList from '@/components/AccountList';
import { accountList } from '../data';

export default function Accounts() {
  // Fonction pour modifier un compte
  const handleModifyAccount = (accountId) => {
    // Implémentez ici la logique pour modifier le compte avec l'identifiant accountId
    console.log(`Modify account with id: ${accountId}`);
  };

  return (
    <div>
      <h1>List of Accounts</h1>
      <AccountList accounts={accountList} handleModifyAccount={handleModifyAccount} />
    </div>
  );
}

