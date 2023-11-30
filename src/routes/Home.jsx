import React from 'react'
import { useState } from 'react'
import Banner from '../compenents/Layout/Banner'
import Deskripsi from '../compenents/Layout/Deskripsi'
import CalendarInput from '../compenents/forms/CalendarInput'
import useCalendar from '../hooks/useCalendar'

import '../styles/react-calendar.css'
import Session from '../compenents/forms/Session'
import SummaryBooking from '../compenents/forms/SummaryBooking'
// import 'react-calendar/dist/Calendar.css'

const app = () => {
  const [selectedDate, setSelectedDate] = useCalendar()
  const handleBackToCalendar = () => {
    // Fungsi untuk mengatur kembali ke pemilihan tanggal
    setSelectedDate(null) // Reset tanggal yang dipilih menjadi null atau sesuai kebutuhan
  }

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
            {/* <SummaryBooking /> */}
            {/* <Session /> */}
            {selectedDate ? (
              <Session selectedDate={selectedDate} onBackToCalendar={handleBackToCalendar} />
            ) : (
              <CalendarInput value={selectedDate} onChange={setSelectedDate} minDate={0} maxDate={30} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default app
