import DayComponent from '../02-components/DayComponent'
import { useSelector } from 'react-redux'
import { useState } from "react"

const DaysSection = () => {

    const days = useSelector( state => state.tasksReducer.days )
    const [isDaysVisible, setIsDaysVisible] = useState(false)

    return(
        <aside className={`days ${isDaysVisible && 'is-days-visible'}`}>
            <div className="days__trigger" onClick={()=>setIsDaysVisible(!isDaysVisible)}>+</div>
            <div className="days__list">
                {
                    days.map( day => (
                        <DayComponent 
                            key={day.id}
                            id={day.id}
                            title={day.title}
                            active={day.active}
                            tasks={day.tasks}
                        />
                    ))
                }
            </div>
        </aside>
    )
}


export default DaysSection