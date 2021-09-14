import { initialState } from './initialState'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducers } from './reducers'
import { createStore } from 'redux'

const pTasks = localStorage.getItem('p-tasks') ? JSON.parse(localStorage.getItem('p-tasks')) : initialState

const store = createStore(
    rootReducers,
    pTasks,
    composeWithDevTools()
)

store.subscribe(()=>{
    localStorage.setItem('p-tasks', JSON.stringify( store.getState()) )
})


export default store