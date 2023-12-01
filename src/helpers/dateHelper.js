export const formatDate = (date) => {
  return new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

export const convertTime = (date) => {
  return new Intl.DateTimeFormat('en', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
}

export const convertUTC = (date) => {
  const timeZoneOffsetMinutes = new Date(date).getTimezoneOffset()
  const utcDate = new Date(date)
  utcDate.setMinutes(utcDate.getMinutes() - timeZoneOffsetMinutes) // Adjust for local time zone
  utcDate.setUTCHours(0, 0, 0, 0) // Set time to midnight in UTC
  return utcDate.toISOString()
}
