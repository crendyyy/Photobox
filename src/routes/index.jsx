import Home from './Home'
import Dashboard from './Dashboard'
import BookingDetail from './BookingDetail'
import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'

const routes = [
  {
    path: '',
    element: <Home />,
  },
  {
    element: (
      <>
        <Header />
        <div className='mx-auto mt-10 text-sm max-w-7xl'>
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'booking/:id',
        element: <BookingDetail />,
      },
    ],
  },
]

export default routes
