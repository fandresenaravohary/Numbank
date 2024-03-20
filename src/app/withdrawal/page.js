import WithdrawalForm from '@/components/WithdrawalForm'
import React from 'react'

export default function Withdrawal() {
  const accounts = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Becker",
      salary: 30000,
      accountNumber: 1234567
    },
    {
      id: 2,
      firstName: "Kobe",
      lastName: "Bryant",
      salary: 400000,
      accountNumber: 1987643
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Jordan",
      salary: 1000000,
      accountNumber: 1334567
    }
  ]
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold mb-16'>Withdrawal's page</h1>
      <WithdrawalForm accounts={accounts}/>
    </div>
  )
}