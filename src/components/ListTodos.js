import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from './Slice'

function ListTodos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
      <div className='mt-4'>Todos List</div>
      {todos.map((todo) => (
        <li className='text-gray-50' key={todo.id}>
            {todo.text}
            <button className='border px-3  rounded-xl ml-3 bg-red-600 border-black ' onClick={() => dispatch(removeTodo(todo.id))}>x</button>
        </li>
      ))}
    </>
  )
}

export default ListTodos
