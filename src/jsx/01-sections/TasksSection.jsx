import { TaskComponent } from '../02-components/TaskComponent'
import { useSelector } from 'react-redux'

const TasksSection = () => {
    
    const days = useSelector( state => state.tasksReducer.days )
    
    return(
        <section className="tasks" >
            <div className="tasks__blur"></div>
            { 
                days.map( day => <TaskComponent 
                                    key={day.id} 
                                    day={day.id} 
                                    tasks={day.tasks} 
                                    active={day.active}
                /> ) 
            }
        </section>
    )
}


export default TasksSection