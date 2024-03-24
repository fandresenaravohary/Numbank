import TransferList from '@/components/TransferList'
import React from 'react'
import { transferList } from '../data'

export default function TransferLists() {
  return (
    <div>
        <TransferList transfers={transferList}/>
    </div>
  )
}
