import React from 'react'
import ChevronIcon from '../../assets/icons/ChevronIcon'

const Session = () => {
  return (
    <div className='w-[52%]'>
      <div className='flex justify-center'>
        <button className='flex items-center justify-start'>
          <ChevronIcon direction='top' />
        </button>
        <h1 className='flex justify-center'>Pilih Sesi</h1>
      </div>
    </div>
  )
}
export default Session
