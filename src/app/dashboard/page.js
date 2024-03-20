"use client"
import AccountList from '@/components/AccountList'
import TopNav from '@/components/TopNav'
import React from 'react'

export default function HomePage() {
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
    <div>
        <TopNav/>
        <AccountList accounts={accounts}/>
    </div>
  )
}
