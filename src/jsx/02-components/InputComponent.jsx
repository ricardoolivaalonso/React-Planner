import { useState } from "react"
import { useDispatch } from 'react-redux'
import { UPDATE_TASK_ACTION } from '../../redux/actions'

const InputComponent = ({oldTitle,id,day}) => {

    const dispatch = useDispatch()
    const [ title, setTitle ] = useState(oldTitle)
    const [ editable, setEditable ] = useState(false)

    return(
        <>
            {
                !editable ? 
                <input className="task__title" 
                    defaultValue={ title } 
                    onFocus={ ()=>setEditable(!editable) } 
                /> 
                :
                <input className="task__title task__title2" 
                    value = { title }
                    onChange={ (e)=>setTitle(e.target.value) }
                    onBlur={ ()=>setEditable(!editable) } 
                    onKeyUp = { ()=> dispatch( UPDATE_TASK_ACTION({day, id, title}) ) }
                />
            }
        </>
    )
}

export { InputComponent }