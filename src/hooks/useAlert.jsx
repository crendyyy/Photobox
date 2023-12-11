import { useState } from 'react'

const useAlert = () => {
  const [onAlert, setAlert] = useState(null)

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
