import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, deletetodo, edittodo } from '../redux/slices/todoSlice'
import todoStyle from '../styles/Todo.module.css'
import TodoList from './TodoList'

const Todo = () => {

  const [val, setVal] = useState('')
  const dispatch = useDispatch()

  const todoList = useSelector((state) => state.todo.list)
  console.log(todoList);

  const eventHandler = (e) => {
    setVal(e.target.value)
  }
  return (
    <>

      <div className={todoStyle.container}>
        <h1 className={todoStyle.title}>
          <span>Todo</span> List
        </h1>
        <div className={todoStyle.main}>
          <div className={todoStyle.grid}>
            <div className={todoStyle.card}>
              <div className={todoStyle.inputCard}>

                <input
                  type="text"
                  placeholder='INPUT'
                  value={val}
                  onChange={eventHandler} />
                <button className='new-btn' onClick={() => dispatch(addtodo(val), setVal(''))}>
                  ADD
                </button>
              </div>
              {
                todoList.map((currElem, i) => <TodoList key={i} {...currElem} />

                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo

/* {
                todoList.map((currElem) => 
                   (
                    <div className={todoStyle.listDiv}>

                      <p>
                        {currElem.data}
                      </p>

                      <div className={todoStyle.listButton}>

                        <button className='new-btn' onClick={() => dispatch(edittodo(currElem.id))}>
                          Edit
                        </button>
                        <button className='new-btn' onClick={() => dispatch(deletetodo(currElem.id))}>
                          Delete
                        </button>
                      </div>
                    </div>
                  )
                )
              } */