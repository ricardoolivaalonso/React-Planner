import { 
    CREATE_TASK,
    READ_TASK,
    UPDATE_TASK, 
    DELETE_TASK 
} from './types'

const CREATE_TASK_ACTION = (task) => ({
    type: CREATE_TASK,
    payload: task
})

const READ_TASK_ACTION = (id) => ({
    type: READ_TASK,
    payload: id
})

const UPDATE_TASK_ACTION = (task) => ({
    type: UPDATE_TASK,
    payload: task
})

const DELETE_TASK_ACTION = (id) =>({
    type: DELETE_TASK,
    payload: id
})

export{
    CREATE_TASK_ACTION,
    READ_TASK_ACTION,
    UPDATE_TASK_ACTION,
    DELETE_TASK_ACTION
}