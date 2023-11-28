import React from 'react'
import ChevronIcon from '../../assets/icons/ChevronIcon'

const Session = () => {
  return (
    <div className='w-[52%] flex flex-col gap-6 border-l border-solid border-gray-100'>
      <div className='flex justify-between h-20 items-center px-4 border-b border-solid border-gray-100'>
        <button className=' flex justify-center items-center w-12 h-12'>
          <ChevronIcon direction='top' />
        </button>
        <h1 className='flex justify-center'>Pilih Sesi</h1>
        <button className='flex justify-center items-center w-12 h-12 pointer-events-none'></button>
      </div>
      <div className=' h-12 flex items-center px-4'>
        <span className=' text-base font-semibold'>Minggu, 13 November, 2023</span>
      </div>
      <div className=' flex flex-col overscroll-y-auto px-4 gap-2'>
        <div className=' container'></div>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
        <button className='flex justify-center items-center rounded-2xl text-slate-900 h-16 border border-solid border-[#0F172A] border-opacity-[20%] text-base font-bold'>10.00 WIB</button>
      </div>
    </div>
  )
}
export default Session
