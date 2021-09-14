import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { CREATE_TASK_ACTION } from "../../redux/actions"

const FormSection = () => {
    const dispatch = useDispatch()
    const days = useSelector( state => state.tasksReducer.days )

    const [task, setTask] = useState('')
    const [hour, setHour] = useState('')
    const [isFormVisible, setIsFormVisible] = useState(false)

    const sendForm = (e) => {
        e.preventDefault()

        let day = days.filter( d => {
            if(d.active === true){
                return d
            }
        })

        if(task !== '' && hour !== ''){
            let hourNumber = parseInt(hour)

            dispatch( CREATE_TASK_ACTION({ task, hourNumber, day: day[0].id }))
            setTask('')
            setHour('')
        }
    }

    return(
        <form className={`task-form ${!isFormVisible && 'is-taskform-visible'}`} onSubmit={ sendForm }>
            <div className="task-form__trigger" onClick={()=>setIsFormVisible(!isFormVisible)}>+</div>
            <div className="task-form__schedule">
                <label className="task-form__schedule-label" htmlFor="task-form__schedule-hour">Hour (24hrs)</label>
                <input type="number" min="0" max="23" className="task-form__schedule-hour" id="task-form__schedule-hour" value={hour} onChange={ (e)=>setHour(e.target.value)}></input>
            </div>
            <input type="input" className="task-form__title" placeholder="New task" value={task} onChange={ (e)=>setTask(e.target.value)}></input>
            <button type="submit" className="task-form__submit" >Create task</button>
        </form>
    )
}

export { FormSection }