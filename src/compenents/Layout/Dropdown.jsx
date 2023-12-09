import { useEffect, useRef, useState } from 'react'
import ChevronIcon from '../../assets/icons/ChevronIcon'
import { motion } from 'framer-motion'

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleOpenMenu = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelectOption = (value) => {
    props.setValue(value)
    setIsOpen(false)
  }

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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
    <div className='relative w-full max-w-sm' ref={dropdownRef}>
      <div
        onClick={toggleOpenMenu}
        className={`flex items-center justify-between h-10 px-4 py-2 border rounded-lg border-slate-200 ${
          isOpen ? 'shadow-input !border-primary' : ''
        }`}
      >
        {props.value}

        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronIcon />
        </motion.div>
      </div>

      {isOpen && (
        <ul className='absolute z-10 w-full overflow-hidden bg-white border rounded-lg top-12 border-slate-200 drop-shadow-sm'>
          {props.options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={handleSelectOption.bind(null, option.name, option.harga)}
                className={`flex justify-between px-4 py-3 hover:bg-primary-light ${
                  option.name === props.value ? 'text-primary' : ''
                }`}
              >
                {option.name}
                <span className={`text-sm font-semibold ${option.harga === props.value ? 'text-primary' : ''}`}>
                  {option.harga}
                </span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
export default Dropdown
