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
  const jadwal = [
    {
      id: 1,
      session: '10:00 WIB',
    },
    {
      id: 2,
      session: '11:00 WIB',
    },
    {
      id: 9,
      session: '13:00 WIB',
    },
    {
      id: 3,
      session: '14:00 WIB',
    },
    {
      id: 4,
      session: '15:00 WIB',
    },
    {
      id: 5,
      session: '16:00 WIB',
    },
    {
      id: 6,
      session: '17:00 WIB',
    },
    {
      id: 7,
      session: '18:00 WIB',
    },
  ]
  const [selectedDate, setSelectedDate] = useCalendar()
  const [previousDate, setPreviousDate] = useState(null)
  const [selectedSession, setSelectedSession] = useState()
  const handleBackToCalendar = () => {
    setSelectedDate(null)
    console.log('Back to Calendar, selectedDate: ', selectedDate)
  }
  const handleSession = (selectSession) => {
    console.log(selectedDate, selectSession)
    setSelectedSession(selectSession)
  }
  const handleBackToSession = () => {
    setSelectedSession(null)
  }
  console.log('Rendering, selectedDate: ', selectedDate)
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
            {selectedSession ? (
              <SummaryBooking
                selectedSession={selectedSession}
                selectedDate={selectedDate}
                backToSession={handleBackToSession}
              />
            ) : selectedDate ? (
              <Session
                session={jadwal}
                selectedDate={selectedDate}
                onBackToCalendar={handleBackToCalendar}
                handleSession={(session) => handleSession(session)}
              />
            ) : (
              <CalendarInput
                previousSelectedDate={previousDate}
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date)
                  setPreviousDate(date)
                }}
                minDate={0}
                maxDate={30}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default app
