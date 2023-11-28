import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
  return (
    <div className='flex gap-2'>
      {props.crumbs.map((crumb, index) => {
        return (
          <>
            {crumb.link ? (
              <Link className='text-primary' to='/dashboard'>
                {crumb.name}
              </Link>
            ) : (
              <span className='text-slate-400'>{crumb.name}</span>
            )}
            {index !== props.crumbs.length - 1 && <div className=''>•</div>}
          </>
        )
      })}
    </div>
  )
}
export default Breadcrumb
