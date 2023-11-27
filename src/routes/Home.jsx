import React from 'react'
import Calendar from 'react-calendar'
import Banner from '../compenents/Layout/Banner'
import Deskripsi from '../compenents/Layout/Deskripsi'

import '../styles/react-calendar.css'

const app = () => {
  return (
    <>
      <div className='absolute translate-x-[-50%] translate-y-[-50%] flex flex-col items-center shadow-xl top-1/2 left-1/2 border border-none rounded-xl'>
        <div className='w-[928px] border border-none rounded-xl bg-white'>
          <div className='flex w-[928px] h-16 border border-none items-center px-6 font '>
            <h1 className='text-3xl font-black -skew-x-12'>LOGO</h1>
          </div>
          <Banner />
          <div className='flex'>
            <Deskripsi />
            <Calendar />
          </div>
        </div>
      </div>
    </>
  )
}
export default app
