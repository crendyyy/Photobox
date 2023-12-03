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
      props.onChange(value);
      props.onSelect && props.onSelect(value);
      props.setActiveDate && props.setActiveDate(value);
      console.log(value);
    } else {
      // Tambahkan logika di sini untuk menangani kasus nilai null (deselected date)
      props.setActiveDate && props.setActiveDate(props.previousSelectedDate ?? null);
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
        tileClassName={({ date, view }) => {
          if (!(date instanceof Date) || view !== 'month') {
            return null;
          }
        
          const minDateObj = new Date(minDate);
          const maxDateObj = new Date(maxDate);
          let className = '';
        
          if (date < minDateObj || date > maxDateObj) {
            className += 'faded';
          }
        
          const dateMidnight = new Date(date);
          dateMidnight.setHours(0, 0, 0, 0);
          
          const today = new Date();
          today.setHours(0, 0, 0, 0);
        
          if (dateMidnight.getTime() === today.getTime()) {
            className += 'react-calendar__tile--now';
          }
        
          if (props.previousSelectedDate) {
            const prevDateMidnight = new Date(props.previousSelectedDate);
            prevDateMidnight.setHours(0, 0, 0, 0);
        
            if (dateMidnight.getTime() === prevDateMidnight.getTime()) {
              className += 'active';
            }
          }
        
          return className.trim();
        }}
      />
    </>
  )
}
export default CalendarInput