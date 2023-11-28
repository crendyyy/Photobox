import BookingFloatMeu from './BookingFloatMenu'

const BookingTable = () => {
  return (
    <div className='border rounded-lg border-slate-200'>
      <table className='w-full text-left text-slate-500'>
        <thead className='text-xs uppercase text-slate-700'>
          <tr>
            <th className='px-6 py-4 bg-slate-200 rounded-ss-lg'>Tanggal</th>
            <th className='px-6 py-4 bg-slate-200'>Jam</th>
            <th className='px-6 py-4 bg-slate-200'>Nama</th>
            <th className='px-6 py-4 bg-slate-200'>Paket</th>
            <th className='px-2 py-4 bg-slate-200 rounded-se-lg'></th>
          </tr>
        </thead>

        <tbody>
          <tr className='border-b last:border-none'>
            <td className='px-6 py-4 font-medium text-gray-900 bg-white'>Sen, 16-Nov-2023</td>
            <td className='px-6 py-4 bg-white'>15.00 WIB</td>
            <td className='px-6 py-4 bg-white'>John Doe</td>
            <td className='px-6 py-4 bg-white'>Jomblo</td>
            <td className='px-2 py-1 bg-white w-14'>
              <BookingFloatMeu />
            </td>
          </tr>

          <tr className='border-b last:border-none'>
            <td className='px-6 py-4 font-medium text-gray-900 bg-white'>Sen, 16-Nov-2023</td>
            <td className='px-6 py-4 bg-white'>15.00 WIB</td>
            <td className='px-6 py-4 bg-white'>John Doe</td>
            <td className='px-6 py-4 bg-white'>Jomblo</td>
            <td className='px-2 py-1 bg-white w-14'>
              <BookingFloatMeu />
            </td>
          </tr>

          <tr className='border-b last:border-none'>
            <td className='px-6 py-4 font-medium text-gray-900 bg-white rounded-es-lg'>Sen, 16-Nov-2023</td>
            <td className='px-6 py-4 bg-white'>15.00 WIB</td>
            <td className='px-6 py-4 bg-white'>John Doe</td>
            <td className='px-6 py-4 bg-white'>Jomblo</td>
            <td className='px-2 py-1 bg-white w-14 rounded-ee-lg'>
              <BookingFloatMeu />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default BookingTable
