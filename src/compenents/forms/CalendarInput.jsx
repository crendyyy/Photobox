import Calendar from 'react-calendar'

import { setMinDate, setMaxDate } from '../../hooks/useCalendar'
import { convertUTC } from '../../helpers/dateHelper'
import CalendarChevron from '../../assets/icons/ChevronCalendar'

const CalendarInput = (props) => {
  const minDate = setMinDate(props.minDate ?? 30)
  const maxDate = setMaxDate(props.maxDate ?? 30)
  const inputChangeHandler = (value) => {
    props.onChange(convertUTC(value))
    console.log(value)
  }

  return (
    <>
      <Calendar
        value={props.value}
        onChange={inputChangeHandler}
        locale='id-ID'
        minDetail='month'
        calendarType='iso8601'
        prevLabel={<CalendarChevron direction='right' />}
        nextLabel={<CalendarChevron direction='left' />}
        tileClassName={({ date }) => {
          const currentDate = convertUTC(date)
          return currentDate < minDate || currentDate > maxDate ? 'faded' : null
        }}
      />
    </>
  )
}
export default CalendarInput
