"use client"
import React, { useState } from "react";

const TransferList = ({ transfers }) => {
  const [cancelledTransferId, setCancelledTransferId] = useState(null);

  const handleCancel = (transferId) => {
    // Logique pour annuler le virement avec l'ID transferId
    setCancelledTransferId(transferId);
  };

  return (
    <div>
      <h2>Lists of transfers</h2>
      {transfers.map((transfer) => (
        <div key={transfer.id} className="border p-4 my-2">
          <p>Amount : {transfer.amount}</p>
          <p>Reason : {transfer.reason}</p>
          <p>Effective Date : {transfer.effectDate}</p>
          <p>Registration date : {transfer.registerDate}</p>
          {transfer.status === "done" ? (
            <p>Statut : Done</p>
          ) : (
            <>
              <p>Statut : Loanding</p>
              {new Date(transfer.effectDate) > new Date() && (
                <button onClick={() => handleCancel(transfer.id)}>Cancel</button>
              )}
              {cancelledTransferId === transfer.id && (
                <p>Transfer cancelled</p>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TransferList;
