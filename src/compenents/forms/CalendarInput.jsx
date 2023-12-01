import Calendar from 'react-calendar'

import { setMinDate, setMaxDate } from '../../hooks/useCalendar'
import { convertUTC } from '../../helpers/dateHelper'
import CalendarChevron from '../../assets/icons/ChevronCalendar'
import RightIcon from '../../assets/icons/RightChevron'

const CalendarInput = (props) => {
  const minDate = setMinDate(props.minDate ?? 30)
  const maxDate = setMaxDate(props.maxDate ?? 30)
  const inputChangeHandler = (value) => {
    if (value) {
      props.onChange(convertUTC(value))
      props.onSelect && props.onSelect(convertUTC(value))
      props.setActiveDate && props.setActiveDate(convertUTC(value))
      console.log(value)
    }
  }

  return (
    <>
      <Calendar
        value={props.value}
        onChange={inputChangeHandler}
        activeStartDate={props.previousSelectedDate ?? props.value}
        locale='id-ID'
        minDetail='month'
        calendarType='iso8601'
        prevLabel={<CalendarChevron />}
        nextLabel={<RightIcon />}
        tileClassName={({ date }) => {
          if (date) {
            const currentDate = convertUTC(date)
            return currentDate < minDate || currentDate > maxDate
              ? 'faded'
              : props.activeDate && currentDate.getTime && currentDate.getTime() === props.activeDate.getTime()
              ? 'active'
              : null
          }
          return null
        }}
      />
    </>
  )
}
export default CalendarInput
