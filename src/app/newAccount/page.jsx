import AccountForm from '@/components/AccountForm'
import TopNav from '@/components/TopNav'
import React from 'react'

export default function Account() {
  return (
    <div>
      <TopNav/>
      <div className='flex flex-col justify-center items-center h-screen bg-slate-100'>
      <h1 className='text-3xl'>Add your new account here</h1>
      <AccountForm/>
    </div>
    </div>
  )
}
