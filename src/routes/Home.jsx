import React, { useReducer } from 'react'
import Banner from '../compenents/Layout/Banner'
import Deskripsi from '../compenents/Layout/Deskripsi'
import CalendarInput from '../compenents/forms/CalendarInput'

import '../styles/react-calendar.css'
import Session from '../compenents/forms/Session'
import SummaryBooking from '../compenents/forms/SummaryBooking'
import useAlert from '../hooks/useAlert'
import Alert from '../compenents/layout/Alert'

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
}

const app = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_DATE':
        return { ...state, selectedDate: action.payload }
      case 'SET_FORM_DATA':
        return { ...state, formData: { ...state.formData, ...action.payload } }
      case 'SET_SELECTED_SESSION':
        return { ...state, selectedSession: action.payload }
      case 'SET_PREV_SESSION':
        return { ...state, prevSession: action.payload }
      case 'SET_PREVIOUS_DATE':
        return { ...state, previousDate: action.payload }
      case 'SET_DROPDOWN':
        const paketTerpilih = paket.find((p) => p.name === action.payload.value)
        const harga = paketTerpilih ? paketTerpilih.harga : ''
        return {
          ...state,
          typeFilter: action.payload.value,
          formData: {
            ...state.formData,
            paketDipilih: action.payload.value,
            hargaPaket: harga,
          },
        }
      default:
        throw new Error()
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
  const [state, dispatch] = useReducer(reducer, initialState)
  const { onAlert, setAlert, hideAlert } = useAlert(null)

  const handleFormSubmit = (e) => {
    dispatch({ type: 'SET_FORM_DATA', payload: { [e.target.name]: e.target.value } })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const isFormDataComplete =
      state.formData.nama &&
      state.formData.noWa &&
      state.formData.membawaHewan &&
      state.formData.paketDipilih &&
      state.formData.hargaPaket

    if (isFormDataComplete) {
      setAlert({ state: 'success', message: { head: 'Sukses', body: 'Form berhasil disubmit.' } })
    } else {
      setAlert({ state: 'danger', message: { head: 'Gagal', body: 'Harap lengkapi semua bidang form.' } })
    }
    console.log(state.formData)
  }

  const handleBackToCalendar = () => {
    dispatch({ type: 'SET_SELECTED_DATE', payload: null })
    console.log('Back to Calendar, selectedDate: ', state.selectedDate)
  }
  const handleSession = (selectSession) => {
    dispatch({ type: 'SET_SELECTED_SESSION', payload: selectSession })
    dispatch({ type: 'SET_PREV_SESSION', payload: selectSession })
    console.log(state.selectedSession)
  }
  const handleBackToSession = () => {
    dispatch({ type: 'SET_SELECTED_SESSION', payload: null })
    console.log(state.selectedSession)
  }
  const handleBackToCalendarSession = () => {
    dispatch({ type: 'SET_SELECTED_DATE', payload: null })
    dispatch({ type: 'SET_SELECTED_SESSION', payload: null })
    console.log('Back to Calendar, selectedDate: ', state.selectedDate)
  }
  const handleDropdownChange = (value) => {
    dispatch({ type: 'SET_DROPDOWN', payload: { value, paket } })
  }
  console.log('Rendering, selectedDate: ', state.selectedDate)
  return (
    <>
      {onAlert && <Alert onAlert={onAlert} onHide={hideAlert} state={onAlert.state} message={onAlert.message} />}
      <div className='flex items-center justify-center my-10 border border-none rounded-xl'>
        <div className='w-full max-w-[928px] border border-none rounded-xl bg-white'>
          <div className='flex w-[928px] h-16 border border-none items-center px-6 font '>
            <h1 className='text-3xl font-black -skew-x-12'>LOGO</h1>
          </div>
          <Banner />
          <div className='flex'>
            <Deskripsi />
            {state.selectedSession ? (
              <SummaryBooking
                selectedSession={state.selectedSession}
                selectedDate={state.selectedDate}
                formData={state.formData}
                paket={paket}
                typeFilter={state.typeFilter}
                handleSubmit={handleSubmit}
                handleFormSubmit={handleFormSubmit}
                handleDropdownChange={handleDropdownChange}
                backToSession={handleBackToSession}
                onBackToCalendar={handleBackToCalendarSession}
              />
            ) : state.selectedDate ? (
              <Session
                session={jadwal}
                selectedDate={state.selectedDate}
                selectedSession={state.selectedSession || state.prevSession}
                onBackToCalendar={handleBackToCalendar}
                handleSession={(session) => handleSession(session)}
              />
            ) : (
              <CalendarInput
                previousSelectedDate={state.previousDate}
                value={state.selectedDate}
                onChange={(date) => {
                  dispatch({ type: 'SET_SELECTED_DATE', payload: date })
                  dispatch({ type: 'SET_PREVIOUS_DATE', payload: date })
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
