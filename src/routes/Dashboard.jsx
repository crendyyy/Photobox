import React, { useState } from 'react'
import Dropdown from '../compenents/Layout/Dropdown'

const Dashboard = () => {
  const paket = [
    { id: 0, name: 'Semua Paket' },
    { id: 1, name: 'Jomblo' },
    { id: 2, name: 'Couple' },
    { id: 3, name: 'Family' },
  ]

  const [typeFilter, setTypeFilter] = useState('Semua Paket')

  return (
    <>
      <header className='h-16 bg-white'></header>
      <div className='mx-20 mt-10 bg-white rounded-lg'>
        <div className='flex gap-4 p-4'>
          <input
            type='text'
            placeholder='Cari Transaksi'
            className='w-full h-10 max-w-2xl px-4 py-2 border rounded-lg outline-none border-slate-200 focus:shadow-input focus:border-primary'
          />

          <Dropdown options={paket} value={typeFilter} setValue={setTypeFilter} />

          <button className='px-4 ml-auto leading-10 text-white rounded-lg bg-primary whitespace-nowrap'>
            + Buat Booking
          </button>
        </div>
      </div>
    </>
  )
}
export default Dashboard
