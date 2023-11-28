import React from 'react'
import TimeCircle from '../../assets/Time'
import Document from '../../assets/icons/Document'
import Image from '../../assets/icons/Image'
import Logo from '../../assets/Logo.svg'

const Deskripsi = () => {
  return (
    <div className='w-[48%] border border-none'>
      <div className='w-[120px] h-[120px] border border-none rounded-full bg-white flex absolute translate-x-[163.3%] translate-y-[-53.3%]'>
        <img src={Logo} alt='Logo' />
      </div>
      <div className='flex justify-center px-6 pt-20 pb-8'>
        <div className='flex justify-start flex-col w-[416px] gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold text-black'>COMPANY NAME</h1>
            <p className='text-base text-slate-500'>The 1st Self-Photo Studio in Selatpanjang</p>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='flex gap-2 text-sm text text-slate-700'>
              <TimeCircle /> 40 menit (pengambilan gambar bebas)
            </p>
            <p className='flex gap-2 text-sm text text-slate-700'>
              <Image /> 3 lembar foto cetak
            </p>
            <p className='flex gap-2 text-sm text text-slate-700'>
              <Document /> Softcopy gratis
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Deskripsi
