import React, { useEffect, useState } from 'react'
import CalendarChevron from '../../assets/icons/ChevronCalendar'
import RightIcon from '../../assets/icons/RightChevron'

const CalendarCustom = (props) => {
  const daysOfWeek = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  const [currentMonth, setCurrentMonth] = useState(new Date())

  useEffect(() => {
    setCurrentMonth(props.value || new Date())
  }, [props.value])

  const renderHeader = () => {
    return (
      <div className='flex items-center justify-between mb-4'>
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
        const currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), currentDay)
        const isToday =
          currentDate.getDate() === today.getDate() &&
          currentDate.getMonth() === today.getMonth() &&
          currentDate.getFullYear() === today.getFullYear()
        const isPreviousDate = currentDate.toDateString() === props.previousSelectedDate?.toDateString()
        const beforeToday =
          currentDate.getFullYear() < today.getFullYear() ||
          (currentDate.getFullYear() === today.getFullYear() &&
            (currentDate.getMonth() < today.getMonth() ||
              (currentDate.getMonth() === today.getMonth() && currentDate.getDate() < today.getDate())))

        if (i === 0 && j < startOfWeek) {
          cells.push(<div key={`${i}-${j}`} className='visible'></div>)
        } else if (currentDay <= endOfWeek) {
          cells.push(
            <div
              key={`${i}-${j}`}
              className={`p-4 text-center rounded-lg hover:text-white hover:bg-primary ${
                isToday ? 'bg-primary-light text-primary-dark' : ''
              } ${isPreviousDate ? 'bg-primary text-white' : ''} ${
                beforeToday ? 'text-black bg-transparent opacity-20 pointer-events-none' : ''
              }`}
              onClick={() => {
                props.onChange(currentDate)
              }}
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

  const onActiveStartDateChange = ({ activeStartDate }) => {
    if (renderCells() && activeStartDate < setCurrentMonth) {
      console.log('Gagal.')
      return
    }
    setCurrentMonth(activeStartDate)
    console.log('berhasil', activeStartDate)
  }

  const prevMonth = () => {
    const currentMonthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
    const today = new Date()

    // Cek apakah bulan saat ini
    if (currentMonthStart <= today) {
      console.log('Gagal. Anda berada di bulan saat ini.')
      return
    }

    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    onActiveStartDateChange({ activeStartDate: nextMonth })
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const getFormattedMonth = () => {
    const options = { month: 'long', year: 'numeric' }
    return currentMonth.toLocaleDateString('id-ID', options)
  }

  return (
    <div className='overflow-hidden w-full flex border-l border-solid border-[#f1f5f9]  flex-col px-2 py-6'>
      {renderHeader()}
      <div className='flex'>{renderDays()}</div>
      <div className='grid gap-2 text-base font-semibold text-[#0f172a] cells'>{renderCells()}</div>
    </div>
  )
}

export default CalendarCustom
