import CalendarIcon from '../assets/icons/CalendarIcon'
import ClockIcon from '../assets/icons/ClockIcon'
import Breadcrumb from '../components/layout/Breadcrumb'
import { Link } from 'react-router-dom'

const Booking = () => {
  const breadcrumbs = [
    {
      name: 'Booking',
      link: '/dashboard',
    },
    {
      name: 'Rincian Booking',
    },
  ]

  return (
    <div className='flex flex-col gap-12 p-6 bg-white rounded-lg'>
      <Breadcrumb crumbs={breadcrumbs} />

      <div className='flex flex-col gap-4'>
        <h1>John Doe</h1>

        <div className='flex items-center gap-4'>
          <div className='p-3 rounded-2xl bg-primary-light text-primary'>
            <CalendarIcon />
          </div>
          <p className='text-[16px] font-medium'>Minggu, 13 November, 2023</p>
        </div>

        <div className='flex items-center gap-4'>
          <div className='p-3 rounded-2xl bg-primary-light text-primary'>
            <ClockIcon />
          </div>
          <p className='text-[16px] font-medium'>11.00 WIB</p>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p>Detail Pesanan</p>

        <div className='border rounded-lg border-slate-900/20'>
          <div className='flex border-b border-slate-900/20'>
            <span className='w-full p-4 font-semibold'>ID Booking</span>
            <p className='w-full p-4'>QRNZ-WWHW-RKCQ</p>
          </div>

          <div className='flex'>
            <span className='w-full p-4 font-semibold'>Status Booking</span>
            <div className='flex items-center w-full px-4'>
              <div className='px-2 py-1 rounded-md text-blue-dark bg-blue-light'>Berlangsung</div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-4'>
        <p>Formulir Pesanan</p>

        <div className='border rounded-lg border-slate-900/20'>
          <div className='flex border-b border-slate-900/20'>
            <span className='w-full p-4 font-semibold'>Nomor Whatsapp</span>
            <p className='w-full p-4'>0812 3456 7978</p>
          </div>

          <div className='flex border-b border-slate-900/20'>
            <span className='w-full p-4 font-semibold'>Paket</span>
            <p className='w-full p-4'>Single (Maks 1 Orang)</p>
          </div>

          <div className='flex'>
            <span className='w-full p-4 font-semibold'>Hewan Peliharaan</span>
            <p className='w-full p-4'>Iya</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p>Nominal Transaksi</p>
        <h1 className='text-primary'>Rp 50.000</h1>
      </div>

      <button className='h-16 px-4 text-base font-bold text-white transition-all rounded-lg ld text-md bg-primary hover:bg-primary-hover focus:ring-4 focus:ring-primary-glow'>
        Terima Booking
      </button>
    </div>
  )
}
export default Booking
