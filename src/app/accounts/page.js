"use client"
import AccountList from '@/components/AccountList'
import React from 'react'
import { accountList } from '../data'

export default function Accounts() {
  return (
    <div>
      <h1>Lists of accounts</h1>
      <AccountList accounts={accountList}/>
  </div>
  )
}
