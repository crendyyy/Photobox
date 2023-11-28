import Dropdown from '../layout/Dropdown'
import PlusIcon from '../../assets/icons/PlusIcon'
import SearchIcon from '../../assets/icons/SearchIcon'
import { useState } from 'react'

const BookingFilter = () => {
  const paket = [
    { id: 0, name: 'Semua Paket' },
    { id: 1, name: 'Jomblo' },
    { id: 2, name: 'Couple' },
    { id: 3, name: 'Family' },
  ]

  const [typeFilter, setTypeFilter] = useState('Semua Paket')

  return (
    <div className='mb-6 bg-white rounded-lg'>
      <div className='flex border-b border-slate-200 h-14'>
        <div className='w-full px-4 py-2 font-semibold'>
          <div className='flex items-center justify-center w-full h-full transition-all rounded-lg cursor-pointer text-slate-700 hover:bg-primary-light hover:text-primary-dark'>
            Belum Konfirmasi
          </div>
        </div>

        <div className='w-full px-4 py-2 font-semibold'>
          <div className='flex items-center justify-center w-full h-full transition-all rounded-lg cursor-pointer text-slate-700 hover:bg-primary-light hover:text-primary-dark'>
            Berlangsung
          </div>
        </div>

        <div className='w-full px-4 py-2 font-semibold'>
          <div className='flex items-center justify-center w-full h-full transition-all rounded-lg cursor-pointer text-slate-700 hover:bg-primary-light hover:text-primary-dark'>
            Selesai
          </div>
        </div>

        <div className='w-full px-4 py-2 font-semibold'>
          <div className='flex items-center justify-center w-full h-full transition-all rounded-lg cursor-pointer text-slate-700 hover:bg-primary-light hover:text-primary-dark'>
            Dibatalkan
          </div>
        </div>
      </div>

      <div className='flex gap-4 p-4'>
        <div className='relative w-full max-w-2xl'>
          <div className='absolute flex items-center h-full py-2 pl-4 pr-2 pointer-events-none text-slate-400'>
            <SearchIcon />
          </div>
          <input
            type='text'
            placeholder='Cari Transaksi'
            className='w-full h-10 pl-10 pr-4 border rounded-lg outline-none border-slate-200 focus:ring-[3px] focus:ring-primary-glow focus:border-primary'
          ></input>
        </div>

        <Dropdown options={paket} value={typeFilter} setValue={setTypeFilter} />

        <button className='flex items-center gap-2 px-4 ml-auto font-medium text-white transition-all rounded-lg bg-secondary hover:bg-secondary-hover whitespace-nowrap'>
          <PlusIcon />
          Buat Booking
        </button>
      </div>
    </div>
  )
}
export default BookingFilter
