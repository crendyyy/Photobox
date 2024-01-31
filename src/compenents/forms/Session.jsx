import React, { useState } from 'react'
import ChevronIcon from '../../assets/icons/ChevronIcon'
import CalendarIcon from '../../assets/icons/CalendarIcon'
import { formatDate } from '../../helpers/dateHelper'

const Session = (props) => {
  return (
    <div className='w-[52%] flex flex-col border-l border-solid border-gray-100 max-md:w-full max-lg:w-full'>
      <div className='flex items-center justify-between h-20 px-4 border-b border-gray-100 border-solid'>
        <button onClick={props.onBackToCalendar} className='flex items-center justify-center w-12 h-12 '>
          <ChevronIcon direction='top' />
        </button>
        <h1 className='flex justify-center'>Pilih Sesi</h1>
        <button className='flex items-center justify-center w-12 h-12 pointer-events-none'></button>
      </div>
      <div className='overflow-y-scroll hide-scrollbar max-h-96'>
        <div
          className='flex items-center h-24 gap-4 px-4 border-b border-gray-100 border-solid max-lg:justify-center max-md:justify-start'
          onClick={props.onBackToCalendar}
        >
          <div className='p-3 rounded-2xl bg-primary-light text-primary'>
            <CalendarIcon />
          </div>
          <span className='text-base font-semibold'>{formatDate(props.selectedDate)}</span>
        </div>
        <div className='flex flex-col gap-2 px-4 py-4 max-lg:px-36 max-md:px-4'>
          {props.session.map((jadwal) => (
            <button
              key={jadwal.id}
              onClick={() => {
                props.handleSession(jadwal.session)
              }}
              className={`flex items-center justify-center h-16 text-base font-bold border border-solid hover:border-none hover:bg-primary hover:text-white rounded-2xl text-slate-900 border-primary ${
                props.selectedSession === jadwal.session ? 'bg-primary text-white' : ''
              } ${jadwal.isPast ? 'bg-black bg-opacity-20 text-gray-500 border-none pointer-events-none' : ''}`}
            >
              {jadwal.session}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Session
