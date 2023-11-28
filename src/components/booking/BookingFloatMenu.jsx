import { useEffect, useRef, useState } from 'react'
import OptionIcon from '../../assets/icons/OptionIcon'
import DocumentIcon from '../../assets/icons/DocumentIcon'
import WalletIcon from '../../assets/icons/WalletIcon'
import ClockIcon from '../../assets/icons/ClockIcon'
import CalendarClose from '../../assets/icons/CalendarClose'

const BookingFloatMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const optionRef = useRef(null)

  const handleToggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClickOutside = (event) => {
    if (optionRef.current && !optionRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div ref={optionRef} className='relative'>
      <div
        onClick={handleToggleOpen}
        className={`flex items-center justify-center w-10 h-10 rounded-full text-slate-700 hover:bg-gray-200 ${
          isOpen ? 'bg-slate-200' : ''
        }`}
      >
        <OptionIcon />
      </div>

      {isOpen && (
        <div className='absolute right-0 z-10 bg-white border rounded-lg shadow-lg top-11 border-slate-200'>
          <ul className='p-2 text-base font-medium text-slate-900'>
            <li>
              <a className='flex items-center h-12 gap-4 p-4 rounded-lg whitespace-nowrap hover:bg-slate-100' href=''>
                <DocumentIcon />
                Detail
              </a>
            </li>
            <li>
              <a className='flex items-center h-12 gap-4 p-4 rounded-lg whitespace-nowrap hover:bg-slate-100' href=''>
                <WalletIcon />
                Bayar Booking
              </a>
            </li>
            <li>
              <a className='flex items-center h-12 gap-4 p-4 rounded-lg whitespace-nowrap hover:bg-slate-100' href=''>
                <ClockIcon />
                Ganti Jadwal
              </a>
            </li>
            <li>
              <a className='flex items-center h-12 gap-4 p-4 rounded-lg whitespace-nowrap hover:bg-slate-100' href=''>
                <CalendarClose />
                Batalkan
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
export default BookingFloatMenu
