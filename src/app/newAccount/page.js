import AccountForm from '@/components/AccountForm'
import React from 'react'

export default function Account() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl'>Add your new account here</h1>
      <AccountForm/>
    </div>
  )
}
