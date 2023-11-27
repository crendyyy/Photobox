import { useState } from 'react'

const useAlert = () => {
  const [onAlert, setAlert] = useState({ head: 'Transaksi Sukses', body: 'Aman' })

  const handleHideAlert = () => {
    setAlert(null)
  }

  return {
    onAlert,
    setAlert,
    hideAlert: handleHideAlert,
  }
}
export default useAlert
