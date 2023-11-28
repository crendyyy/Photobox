const ChevronIcon = (props) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      stroke='currentColor'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={props.direction}
    >
      <path d='M19 8.50012L12 15.5001L5 8.50012' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
export default ChevronIcon
