import React, { useReducer } from 'react'
import { useState } from 'react'
import Banner from '../compenents/Layout/Banner'
import Deskripsi from '../compenents/Layout/Deskripsi'
import CalendarInput from '../compenents/forms/CalendarInput'
import useCalendar from '../hooks/useCalendar'

import '../styles/react-calendar.css'
import Session from '../compenents/forms/Session'
import SummaryBooking from '../compenents/forms/SummaryBooking'
// import 'react-calendar/dist/Calendar.css'
const initialState = {
  selectedDate: null,
  previousDate: null,
  prevSession: null,
  selectedSession: null,
  formData: {
    nama: '',
    noWa: '',
    membawaHewan: '',
    paketDipilih: '',
    hargaPaket: '',
  },
  typeFilter: 'Silahkan pilih',
};

const app = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_DATE':
        return {...state, selectedDate: action.payload };
      case 'SET_FORM_DATA':
        return{...state, formData: {...state.formData, ...action.payload} };
    
      default:
        throw new Error();
    }
  }
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
  const paket = [
    { id: 0, name: 'Silahkan pilih' },
    { id: 1, name: 'Single (Max 1 Orang)', harga: 'Rp. 50.000' },
    { id: 2, name: 'Couple (Max 2 Orang)', harga: 'Rp. 70.000' },
    { id: 3, name: 'Keluarga (Max 5 Orang)', harga: 'Rp. 100.000' },
  ]
  const [selectedDate, setSelectedDate] = useCalendar()
  const [state, dispatch] = useReducer(reducer, initialState)


  const handleFormSubmit = (e) => {
   dispatch ({type: 'SET_FORM_DATA', payload: {[e.target.name]: e.target.value}})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleBackToCalendar = () => {
    setSelectedDate(null)
    console.log('Back to Calendar, selectedDate: ', selectedDate)
  }
  const handleSession = (selectSession) => {
    console.log(selectedDate, selectSession)
    setSelectedSession(selectSession)
    setPrevSession(selectSession)
  }
  const handleBackToSession = () => {
    setSelectedSession(null)
    console.log(selectedSession)
  }
  const handleBackToCalendarSession = () => {
    setSelectedDate(null)
    setSelectedSession(null)
    console.log('Back to Calendar, selectedDate: ', selectedDate)
  }
  const handleDropdownChange = (value) => {
    const paketTerpilih = paket.find(p => p.name === value);
    const harga = paketTerpilih ? paketTerpilih.harga : '';
    setTypeFilter(value);
    setFormData((prevState) => ({
      ...prevState,
      paketDipilih: value,
      hargaPaket: harga
    }));
  }
  console.log('Rendering, selectedDate: ', selectedDate)
  return (
    <>
      <div className='flex items-center justify-center my-10 border border-none rounded-xl'>
        <div className='w-full max-w-[928px] border border-none rounded-xl bg-white'>
          <div className='flex w-[928px] h-16 border border-none items-center px-6 font '>
            <h1 className='text-3xl font-black -skew-x-12'>LOGO</h1>
          </div>
          <Banner />
          <div className='flex'>
            <Deskripsi />
            {selectedSession ? (
              <SummaryBooking
                selectedSession={selectedSession}
                selectedDate={selectedDate}
                formData={formData}
                paket={paket}
                typeFilter={typeFilter}
                handleSubmit={handleSubmit}
                handleFormSubmit={handleFormSubmit}
                handleDropdownChange={handleDropdownChange}
                backToSession={handleBackToSession}
                onBackToCalendar={handleBackToCalendarSession}
              />
            ) : selectedDate ? (
              <Session
                session={jadwal}
                selectedDate={selectedDate}
                selectedSession={selectedSession || prevSession}
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
