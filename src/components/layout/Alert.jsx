import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

import CircleCheck from '../../assets/icons/CircleCheck'
import CircleClose from '../../assets/icons/CircleClose'

const Alert = (props) => {
  const overlayElement = document.querySelector('#overlay-root')
  const backdropElement = document.querySelector('#backdrop-root')

  return (
    <>
      {createPortal(<Backdrop onHide={props.onHide} />, backdropElement)}
      {createPortal(<Overlay message={props.message} onHide={props.onHide} state={props.state} />, overlayElement)}
    </>
  )
}

const Overlay = (props) => {
  const state = {
    success: {
      icon: <CircleCheck />,
    },
    danger: {
      icon: <CircleClose />,
    },
  }

  return (
    <motion.div
      initial={{ x: '-50%', y: '-60%', opacity: 0 }}
      animate={{ x: '-50%', y: '-50%', opacity: 1 }}
      exit={{ x: '-50%', y: '-60%', opacity: 0 }}
      transition={{ duration: 0.2, type: 'spring' }}
      className='fixed w-full max-w-sm overflow-hidden bg-white rounded-2xl top-2/4 left-2/4'
    >
      <div className='flex flex-col items-center gap-6 p-8'>
        {state[props.state].icon}

        <div className='flex flex-col gap-2 text-center'>
          <h4 className=''>{props.message.head}</h4>
          <p className='text-slate-500'>{props.message.body}</p>
        </div>
      </div>

      <div
        onClick={props.onHide}
        className='flex items-center justify-center h-16 border-t cursor-pointer border-slate-200 hover:bg-slate-100'
      >
        Oke
      </div>
    </motion.div>
  )
}

const Backdrop = (props) => {
  return <div onClick={props.onHide} className='fixed inset-0 bg-black cursor-pointer opacity-80'></div>
}

export default Alert
