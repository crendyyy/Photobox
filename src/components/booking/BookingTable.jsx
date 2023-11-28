import BookingFloatMeu from './BookingFloatMenu'
import { Link } from 'react-router-dom'

const BookingTable = () => {
  return (
    <div className='border rounded-lg border-slate-200'>
      <table className='w-full text-left'>
        <thead className='uppercase text-slate-700'>
          <tr>
            <th className='px-6 py-4 bg-slate-200 rounded-ss-lg'>Tanggal</th>
            <th className='px-6 py-4 bg-slate-200'>Jam</th>
            <th className='px-6 py-4 bg-slate-200'>Nama</th>
            <th className='px-6 py-4 bg-slate-200'>Paket</th>
            <th className='px-2 py-4 bg-slate-200 rounded-se-lg'></th>
          </tr>
        </thead>

        <tbody>
          <tr className='border-b group last:border-none'>
            <td className='py-1 pl-1 font-semibold text-gray-900 bg-white'>
              <Link
                to='/booking/QRNZ-WWHW-RKCQ'
                className='flex items-center h-12 px-5 rounded-ss-lg rounded-es-lg group-hover:bg-slate-50'
              >
                Sen, 16-Nov-2023
              </Link>
            </td>

            <td className='py-1 bg-white'>
              <Link to='/booking/QRNZ-WWHW-RKCQ' className='flex items-center h-12 px-5 group-hover:bg-slate-50'>
                15.00 WIB
              </Link>
            </td>

            <td className='py-1 bg-white'>
              <Link to='/booking/QRNZ-WWHW-RKCQ' className='flex items-center h-12 px-5 group-hover:bg-slate-50'>
                John Doe
              </Link>
            </td>

            <td className='py-1 pr-1 bg-white'>
              <Link
                to='/booking/QRNZ-WWHW-RKCQ'
                className='flex items-center h-12 px-5 rounded-se-lg rounded-ee-lg group-hover:bg-slate-50'
              >
                Jomblo
              </Link>
            </td>

            <td className='px-2 py-1 bg-white w-14'>
              <BookingFloatMeu />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default BookingTable
