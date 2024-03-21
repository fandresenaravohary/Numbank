import TopNav from '@/components/TopNav'
import WithdrawalForm from '@/components/WithdrawalForm'
import React from 'react'
import { accountList } from '../data'

export default function Withdrawal() {
  return (
    <div>
        <TopNav/>
      <div className='flex flex-col justify-center items-center h-screen bg-slate-100'>
        <h1 className='text-4xl font-bold mb-12'>Withdrawal's page</h1>
        <WithdrawalForm accounts={accountList}/>
      </div>
    </div>
  )
}