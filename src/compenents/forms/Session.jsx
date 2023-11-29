import React from 'react'
import ChevronIcon from '../../assets/icons/ChevronIcon'

const Session = () => {
  return (
    <div className='w-[52%] flex flex-col gap-6 border-l border-solid border-gray-100'>
      <div className='flex items-center justify-between h-20 px-4 border-b border-gray-100 border-solid'>
        <button className='flex items-center justify-center w-12 h-12 '>
          <ChevronIcon direction='top' />
        </button>
        <h1 className='flex justify-center'>Pilih Sesi</h1>
        <button className='flex items-center justify-center w-12 h-12 pointer-events-none'></button>
      </div>
      <div className='flex items-center h-12 px-4 '>
        <span className='text-base font-semibold '>Minggu, 13 November, 2023</span>
      </div>
      <div className='overflow-y-scroll h-96'>
        <div className='flex flex-col gap-2 px-4 py-4'>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
          <button className='flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary'>
            10.00 WIB
          </button>
        </div>
      </div>
    </div>
  )
}
export default Session
