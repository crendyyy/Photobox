import React from 'react'
import ChevronIcon from '../../assets/icons/ChevronIcon'

const SummaryBooking = () => {
  return (
    <div className='w-[52%] flex flex-col gap-6 border-l border-solid border-gray-100'>
      <div className='flex items-center justify-between h-20 px-4 border-b border-gray-100 border-solid'>
        <button className='flex items-center justify-center w-12 h-12 '>
          <ChevronIcon direction='top' />
        </button>
        <h1 className='flex justify-center'>Ringkasan Booking</h1>
        <button className='flex items-center justify-center w-12 h-12 pointer-events-none'></button>
      </div>
      <div className='flex flex-col gap-4 px-4 justify-startitems-center '>
        <span className='text-base font-semibold '>Minggu, 13 November, 2023</span>
        <span className='text-base font-semibold '>11.00 WIB</span>
      </div>
      <div className='flex flex-col gap-10 py-6'>
        <div className='flex flex-col gap-2 px-4'>
          <span className='text-base font-bold text-slate-700'>
            Nama <span className='text-red-500'>*</span>
          </span>
          <input
            type='text'
            className='border border-slate-900 border-opacity-[20%] w-96 h-12 rounded-lg focus:border-primary focus:outline-none px-2 focus:shadow-input'
          />
        </div>
        <div className='flex flex-col gap-2 px-4'>
          <span className='text-base font-bold text-slate-700'>
            Nomor Whatsapp <span className='text-red-500'>*</span>
          </span>
          <input
            type='text'
            className='border border-slate-900 border-opacity-[20%] w-96 h-12 rounded-lg focus:border-primary focus:outline-none px-2 focus:shadow-input'
          />
        </div>
        <div className='flex flex-col gap-2 px-4'>
          <label className='text-base font-bold text-slate-700'>
            Berapa orang yang akan datang? <span className='text-red-500'>*</span>
          </label>
          <select
            id='numberOfPeople'
            defaultValue=''
            className='appearance-none border border-slate-900 border-opacity-[20%] w-96 h-12 rounded-lg focus:border-primary focus:outline-none px-2 focus:shadow-input bg-white'
          >
            <option value='' disabled selected>
              Silahkan pilih
            </option>
            <option value='1'>Single (Max 1 Orang)</option>
            <option value='2'>Couple (Max 2 Orang)</option>
            <option value='3'>Keluarga (Max 5 Orang)</option>
          </select>
          <span className='absolute flex items-center pr-2 pointer-events-none bottom-9 right-[86px]'>
            <ChevronIcon />
          </span>
        </div>
        <div className='flex flex-col gap-4 px-4'>
          <span className='text-base font-bold text-slate-700'>
            Apakah Anda membawa hewan peliharaan? <span className='text-red-500'>*</span>
          </span>
          <div className='flex flex-col gap-4'>
            <label className='flex items-center'>
              <input
                type='radio'
                name='pet'
                value='yes'
                className='text-primary focus:outline-none focus:ring focus:border-primary'
              />
              <span className='ml-2'>Ya</span>
            </label>
            <label className='flex items-center'>
              <input
                type='radio'
                name='pet'
                value='no'
                className='text-primary focus:outline-none focus:ring focus:border-primary'
              />
              <span className='ml-2'>Tidak</span>
            </label>
          </div>
        </div>
        <div className='flex flex-col gap-4 px-4 '>
          <div className='flex justify-start'>
            <span className='text-base font-bold'>
            Syarat dan Kententuan
            </span>
          </div>
          <div className='flex flex-col gap-8'>
            <span className='text-base text-slate-500'>1. Konfirmasi melalui Whatsapp dalam 1x24 jam, pastikan nomor aktif.</span>
            <span className='text-base text-slate-500'>1. Pembatalan otomatis tanpa konfirmasi dalam waktu 24 jam.</span>
            <span className='text-base text-slate-500'>1. Keterlambatan tanggung jawab pelanggan, datang 15 menit sebelum pemesanan.</span>
            <span className='text-base text-slate-500'>1. Durasi Sesi Foto 18 menit, pengambilan gambar tanpa batas.</span>
            <span className='text-base text-slate-500'>1. Biaya tambahan Rp 30.000/orang jika jumlah orang melebihi paket yang dipilih.</span>
            <span className='text-base text-slate-500'>1. Perubahan jadwal hanya diizinkan SEKALI.</span>
            <span className='text-base text-slate-500'>1. Pemilik hewan bertanggung jawab penuh atas hewan peliharaan.</span>
          </div>
        </div>
        <div className='flex px-4 '>
          <button className=' h-16 w-[396px] border border-none rounded-[40px] bg-primary text-base font-bold text-white'>Booking Sekarang</button>
        </div>
      </div>
    </div>
  )
}
export default SummaryBooking
