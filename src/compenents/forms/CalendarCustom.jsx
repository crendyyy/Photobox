import React, { useState } from 'react'

const CalendarCustom = () => {
  const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const renderHeader = () => {
    return (
      <div className='flex justify-between'>
        <h2>{getFormattedMonth()}</h2>
        <div className='flex gap-2'>
          <button className='flex w-6 h-6' onClick={prevMonth}>{'<'}</button>
          <button className='flex w-6 h-6' onClick={nextMonth}>{'>'}</button>
        </div>
      </div>
    )
  }

  const renderDays = () => {
    return daysOfWeek.map((day, index) => (
      <div className='day' key={index}>
        {day}
      </div>
    ))
  }

  const renderCells = () => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
    const startOfWeek = firstDayOfMonth.getDay()
    const endOfWeek = lastDayOfMonth.getDate()
    const cells = []

    let currentDay = 1
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startOfWeek) {
          cells.push(<div key={`${i}-${j}`} className='empty-cell'></div>)
        } else if (currentDay <= endOfWeek) {
          cells.push(
            <div key={`${i}-${j}`} className='cell hover:bg-primary'>
              {currentDay}
            </div>,
          )
          currentDay++
        } else {
          cells.push(<div key={`${i}-${j}`} className='empty-cell'></div>)
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
    <div className='calendar'>
      {renderHeader()}
      <div className='days'>{renderDays()}</div>
      <div className='cells'>{renderCells()}</div>
    </div>
  )
}

export default CalendarCustom
