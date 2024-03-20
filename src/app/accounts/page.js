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
    },
    {
      id: 2,
      firstName: "Kobe",
      lastName: "Bryant",
      accountNumber: 1987643
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Jordan",
      accountNumber: 1334567
    }
  ]
  return (
    <div>
      <h1>Lists of accounts</h1>
      <AccountList accounts={accounts}/>
  </div>
  )
}
