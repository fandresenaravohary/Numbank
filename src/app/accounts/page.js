"use client"
import AccountList from '@/components/AccountList'
import React from 'react'

export default function Accounts() {
  const accounts = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Becker",
      accountNumber: 1234567
    }
  ]
  return (
    <div>
      <h1>Lists of accounts</h1>
      <AccountList accounts={accounts}/>
  </div>
  )
}
