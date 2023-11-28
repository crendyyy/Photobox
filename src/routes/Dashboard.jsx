import React, { useState } from 'react'

import BookingTable from '../components/booking/BookingTable'
import BookingFilter from '../components/booking/BookingFilter'

const Dashboard = () => {
  return (
    <>
      <header className='h-16 bg-white'></header>
      <div className='mx-20 mt-10 text-sm'>
        <BookingFilter />
        <BookingTable />
      </div>
    </>
  )
}
export default Dashboard
