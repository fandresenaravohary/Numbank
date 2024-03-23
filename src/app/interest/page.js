import InterestConfiguration from '@/components/InterestConfiguration'
import TopNav from '@/components/TopNav'
import React from 'react'

export default function InterestPage() {
  return (
    <div>
      <TopNav/>
      <div className='flex flex-col justify-center items-center h-screen bg-slate-100'>
        <InterestConfiguration/>
      </div>
    </div>
  )
}
