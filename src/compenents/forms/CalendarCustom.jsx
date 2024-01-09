import React, { useState } from 'react'
import CalendarChevron from '../../assets/icons/ChevronCalendar'
import RightIcon from '../../assets/icons/RightChevron'

const CalendarCustom = () => {
  const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const renderHeader = () => {
    return (
      <div className='flex justify-between mb-4'>
        <h2>{getFormattedMonth()}</h2>
        <div className='flex'>
          <button
            className='flex items-center justify-center w-12 h-12 text-white rounded-l-2xl bg-primary'
            onClick={prevMonth}
          >
            {<CalendarChevron />}
          </button>
          <div className='flex items-center h-12 bg-primary'>
            <div className='w-[2px] h-6 rounded-full bg-white'>{''}</div>
          </div>
          <button
            className='flex items-center justify-center w-12 h-12 text-white rounded-r-2xl bg-primary'
            onClick={nextMonth}
          >
            {<RightIcon />}
          </button>
        </div>
      </div>
    )
  }
  const renderDays = () => {
    return daysOfWeek.map((day, index) => (
      <div className='flex-1 mb-2 text-center text-[#4b5563] text-sm' key={index}>
        {day}
      </div>
    ))
  }

  const renderCells = () => {
    const today = new Date()
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    const startOfWeek = firstDayOfMonth.getDay()
    const endOfWeek = lastDayOfMonth.getDate()
    const cells = []

    let currentDay = 1
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        const isToday = currentDay === today.getDate() && currentMonth.getMonth() === today.getMonth()
        if (i === 0 && j < startOfWeek) {
          cells.push(<div key={`${i}-${j}`} className='visible'></div>)
        } else if (currentDay <= endOfWeek) {
          cells.push(
            <div
              key={`${i}-${j}`}
              className={`p-4 text-center rounded-lg hover:text-white hover:bg-primary ${
                isToday ? 'bg-primary-light text-primary-dark' : ''
              }`}
            >
              {currentDay}
            </div>,
          )
          currentDay++
        } else {
          cells.push(<div key={`${i}-${j}`} className='hidden'></div>)
        }
      }
    }

    return cells
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const getFormattedMonth = () => {
    const options = { month: 'long', year: 'numeric' }
    return currentMonth.toLocaleDateString('id-ID', options)
  }

  return (
    <div className='overflow-hidden w-[52%] flex border-l border-solid border-[#f1f5f9]  flex-col px-2 py-6'>
      {renderHeader()}
      <div className='flex'>{renderDays()}</div>
      <div className='grid gap-2 text-base font-semibold text-[#0f172a] cells'>{renderCells()}</div>
    </div>
  )
}

export default CalendarCustom
