import React from 'react'
import Card from '../ui/dashboard/card/card';
import styles from '@/app/ui/dashboard/dashboard.module.css'
import Transactions from '../ui/dashboard/transactions/transactions';
import Chart from '../ui/dashboard/chart/chart';
import Rightbar from '../ui/dashboard/rigthbar/rightbar';

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Chart/>
      </div>
      <div className={styles.side}>
        <Rightbar/>
      </div>
    </div>
  )
}

export default Dashboard;