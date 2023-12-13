import React from 'react'
import ChevronIcon from '../../assets/icons/ChevronIcon'
import Dropdown from '../Layout/Dropdown'
import CalendarIcon from '../../assets/icons/CalendarIcon'
import ClockIcon from '../../assets/icons/ClockIcon'
import { formatDate } from '../../helpers/dateHelper'

const SummaryBooking = (props) => {
  return (
    <div className='w-[52%] flex flex-col border-l border-solid border-gray-100 max-md:w-full max-lg:w-full'>
      <div className='flex items-center justify-between h-20 px-4 border-b border-gray-100 border-solid'>
        <button onClick={props.backToSession} className='flex items-center justify-center w-12 h-12 '>
          <ChevronIcon direction='top' />
        </button>
        <h1 className='flex justify-center'>Ringkasan Booking</h1>
        <button className='flex items-center justify-center w-12 h-12 pointer-events-none'></button>
      </div>
      <div className='overflow-y-auto border-t border-gray-100 border-solid hide-scrollbar max-h-96 max-lg:justify-center max-lg:flex'>
        <div className='max-lg:flex max-lg:flex-col max-lg:w-full'>
          <div className='flex items-center border-b border-solid max-lg:flex max-lg:justify-center max-md:justify-start h-36'>
            <div className='flex flex-col justify-start gap-4 px-4 max-lg:my-6 max-md:px-4 max-lg:justify-center max-lg:w-96 max-lg:px-0 max-md:w-full'>
              <div onClick={props.onBackToCalendar} className='flex items-center gap-4 max-lg:justify-start'>
                <div className='p-3 rounded-2xl bg-primary-light text-primary'>
                  <CalendarIcon />
                </div>
                <span className='text-base font-semibold '>{formatDate(props.selectedDate)}</span>
              </div>
              <div onClick={props.backToSession} className='flex items-center gap-4 max-lg:justify-start'>
                <div className='p-3 rounded-2xl bg-primary-light text-primary'>
                  <ClockIcon />
                </div>
                <span className='text-base font-semibold '>{props.selectedSession}</span>
              </div>
            </div>
          </div>
          <form className='max-lg:flex max-lg:justify-center'>
            <div className='flex flex-col gap-10 py-6 max-lg:w-96 max-md:w-full'>
              <div className='flex flex-col gap-2 px-4 max-lg:px-0 max-md:px-4'>
                <span className='text-base font-bold text-slate-700'>
                  Nama <span className='text-red-500'>*</span>
                </span>
                <input
                  type='text'
                  name='nama'
                  value={props.formData.nama}
                  onChange={props.handleFormSubmit}
                  className='border border-slate-900 border-opacity-[20%] w-96 h-12 rounded-lg focus:border-primary focus:outline-none px-2 focus:shadow-input max-md:w-full'
                />
              </div>
              <div className='flex flex-col gap-2 px-4 max-lg:px-0 max-md:px-4'>
                <span className='text-base font-bold text-slate-700'>
                  Nomor Whatsapp <span className='text-red-500'>*</span>
                </span>
                <input
                  type='text'
                  name='noWa'
                  value={props.formData.noWa}
                  onChange={props.handleFormSubmit}
                  className='max-md:w-full border border-slate-900 border-opacity-[20%] w-96 h-12 rounded-lg focus:border-primary focus:outline-none px-2 focus:shadow-input'
                />
              </div>
              <div className='flex flex-col gap-2 px-4 max-lg:px-0 max-md:px-4'>
                <label className='text-base font-bold text-slate-700'>
                  Berapa orang yang akan datang? <span className='text-red-500'>*</span>
                </label>
                <Dropdown options={props.paket} value={props.typeFilter} setValue={props.handleDropdownChange} />
              </div>
              <div className='flex flex-col gap-4 px-4 max-lg:px-0 max-md:px-4'>
                <span className='text-base font-bold text-slate-700 max-md:pr-2'>
                  Apakah Anda membawa hewan peliharaan? <span className='text-red-500'>*</span>
                </span>
                <div className='flex flex-col gap-4'>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='membawaHewan'
                      value='Ya'
                      checked={props.formData.membawaHewan === 'Ya'}
                      onChange={props.handleFormSubmit}
                      className='hidden '
                    />
                    <span
                      className={`relative inline-block w-6 h-6 mr-2 border rounded-full ${
                        props.formData.membawaHewan === 'Ya'
                          ? 'border border-primary focus:bg-primary shadow-input'
                          : 'border-gray-500'
                      }`}
                    >
                      {props.formData.membawaHewan === 'Ya' && (
                        <span className='absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary top-1/2 left-1/2'></span>
                      )}
                    </span>
                    <span className='ml-2'>Ya</span>
                  </label>
                  <label className='flex items-center'>
                    <input
                      type='radio'
                      name='membawaHewan'
                      value='Tidak'
                      checked={props.formData.membawaHewan === 'Tidak'}
                      onChange={props.handleFormSubmit}
                      className='hidden '
                    />
                    <span
                      className={`relative inline-block w-6 h-6 mr-2 border rounded-full  ${
                        props.formData.membawaHewan === 'Tidak'
                          ? 'border border-primary focus:bg-primary shadow-input'
                          : 'border-gray-500'
                      }`}
                    >
                      {props.formData.membawaHewan === 'Tidak' && (
                        <span className='absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary top-1/2 left-1/2'></span>
                      )}
                    </span>
                    <span className='ml-2'>Tidak</span>
                  </label>
                </div>
              </div>
              <div className='flex flex-col gap-4 px-4 max-lg:px-0 max-md:px-4'>
                <div className='flex justify-start'>
                  <span className='text-base font-bold'>Syarat dan Kententuan</span>
                </div>
                <div className='flex flex-col gap-8'>
                  <div className='flex justify-start gap-1 pr-8'>
                    <span className='text-base text-slate-500'>1.</span>
                    <span className='text-base text-slate-500'>
                      Konfirmasi melalui Whatsapp dalam 1x24 jam, pastikan nomor aktif.
                    </span>
                  </div>
                  <div className='flex justify-start gap-1 pr-8'>
                    <span className='text-base text-slate-500'>2.</span>
                    <span className='text-base text-slate-500'>
                      Pembatalan otomatis tanpa konfirmasi dalam waktu 24 jam.
                    </span>
                  </div>
                  <div className='flex justify-start gap-1 pr-8'>
                    <span className='text-base text-slate-500'>3.</span>
                    <span className='text-base text-slate-500'>
                      Keterlambatan tanggung jawab pelanggan, datang 15 menit sebelum pemesanan.
                    </span>
                  </div>
                  <div className='flex justify-start gap-1 pr-8'>
                    <span className='text-base text-slate-500'>4.</span>
                    <span className='text-base text-slate-500'>
                      Durasi Sesi Foto 18 menit, pengambilan gambar tanpa batas.
                    </span>
                  </div>
                  <div className='flex justify-start gap-1 pr-8'>
                    <span className='text-base text-slate-500'>5.</span>
                    <span className='text-base text-slate-500'>
                      Biaya tambahan Rp 30.000/orang jika jumlah orang melebihi paket yang dipilih.
                    </span>
                  </div>
                  <div className='flex justify-start gap-1 pr-8'>
                    <span className='text-base text-slate-500'>6.</span>
                    <span className='text-base text-slate-500'>Perubahan jadwal hanya diizinkan SEKALI. </span>
                  </div>
                  <div className='flex justify-start gap-1 pr-8'>
                    <span className='text-base text-slate-500'>7.</span>
                    <span className='text-base text-slate-500'>
                      Pemilik hewan bertanggung jawab penuh atas hewan peliharaan.
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex px-4 max-lg:pb-6'>
                <button
                  onClick={props.handleSubmit}
                  className='transition ease-in-out hover:bg-opacity-[70%] h-16 w-[396px] border border-none rounded-[40px] bg-primary text-base font-bold text-white'
                >
                  Booking Sekarang
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SummaryBooking
