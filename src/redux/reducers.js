import { v4 as uuidv4 } from 'uuid';

import { initialState } from './initialState'
import { combineReducers } from 'redux'
import { 
    CREATE_TASK,
    READ_TASK,
    UPDATE_TASK, 
    DELETE_TASK 
} from './types'


const tasksReducer = ( state = initialState , action ) => {

    switch(action.type){

        case CREATE_TASK:
            let newId = uuidv4()
            return{
                ...state,
                days: state.days.map( day => {
                    if(day.id === action.payload.day){
                        return{
                            ...day,
                            tasks: [
                                ...day.tasks,
                                {
                                    id: newId,
                                    title: action.payload.task,
                                    hour: action.payload.hourNumber,
                                }
                            ]
                           
                        }
                    }
                    return day
                })
            }

        case READ_TASK:
            return {
                ...state,
                days: state.days.map( day => {
                    if(day.id !== action.payload){
                        return{
                            ...day,
                            active: false
                        }
                    }
                    else{
                        return{
                            ...day,
                            active: true
                        }
                    }
                })
            }

        case DELETE_TASK:
            return {
                ...state,
                days: state.days.map( day => {
                    if(day.id === action.payload.day){
                        return{
                            ...day,
                            tasks: day.tasks.filter( task => task.id !== action.payload.id )
                        }
                    }
                    return day
                })
            }

        case UPDATE_TASK:
            return{
                ...state,
                days: state.days.map( day => {
                    if(day.id === action.payload.day){
                        return{
                            ...day,
                            tasks: [
                                ...day.tasks.map( task => {
                                    if(task.id === action.payload.id){
                                        return{
                                            ...task,
                                            title: action.payload.title
                                        }
                                    }
                                    return task
                                })
                            ]
                        }
                    }
                    return day
                })
            }

        default:
            return state
    }
}

const rootReducers = combineReducers({
    tasksReducer
})


export { rootReducers }

