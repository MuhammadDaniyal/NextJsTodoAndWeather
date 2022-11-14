import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletetodo, edittodo } from '../redux/slices/todoSlice'
import todoStyle from '../styles/Todo.module.css'

const TodoList = (currElem) => {
    const { id } = currElem;
    const [val, setVal] = useState(currElem.data)
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    return (
        <>
            <div className={todoStyle.listDiv}>
                {
                    (edit === true) ? (
                        <>
                            <input
                                type="text"
                                placeholder='INPUT'
                                value={val}
                                onChange={(e) => setVal(e.target.value)} />
                            <button className='new-btn' onClick={() => { dispatch(edittodo({ id, val })), setEdit(false) }}>
                                Edit
                            </button>
                        </>
                    ) : (
                        <>
                            <p>
                                {currElem.data}
                            </p>
                            <div className={todoStyle.listButton}>
                                <button className='new-btn' onClick={() => setEdit(true)}>
                                    Edit
                                </button>
                                <button className='new-btn' onClick={() => dispatch(deletetodo(currElem.id))}>
                                    Delete
                                </button>
                            </div>
                        </>

                    )
                }
            </div>
        </>
    )
}

export default TodoList