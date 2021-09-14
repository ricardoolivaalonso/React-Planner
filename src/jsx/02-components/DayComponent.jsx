import { useDispatch } from 'react-redux'
import { READ_TASK_ACTION } from '../../redux/actions'

const DayComponent = ({id, title, active, tasks}) => {

    const dispatch = useDispatch()
    
    return(
        <a className={`day ${active && 'day--active'}`} key={id} id={id} onClick = {()=> dispatch( READ_TASK_ACTION(id) )}>
            <h3 className="day__title">{title}</h3>
            <span className="day__tasks">{tasks.length}</span>
        </a>
    )
}

export default DayComponent