import WithdrawalForm from '@/components/WithdrawalForm'
import React from 'react'

export default function Withdrawal() {
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
        <WithdrawalForm accounts={accounts}/>
    </div>
  )
}