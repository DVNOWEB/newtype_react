import React, { useState } from 'react'
import './TodoList.css'

// import from react icons trash can
import { FaTrashAlt } from 'react-icons/fa'
// import from react edit icon
import { FaEdit } from 'react-icons/fa'

// interface to define the props
interface TodoListProps {
  items: { id: string; text: string; editing: boolean }[]
  onDeleteTodo: (id: string) => void
  onSaveTodo: (id: string, newText: string) => void
  onEditTodo: (id: string) => void
}

const TodoList: React.FC<
  TodoListProps & { editText: string; onEditTextChange: (text: string) => void }
> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          {todo.editing ? (
            <input
              className="text-input"
              type="text"
              value={props.editText}
              onChange={(event) => props.onEditTextChange(event.target.value)}
            />
          ) : (
            <span>{todo.text}</span>
          )}
          <button onClick={() => props.onEditTodo(todo.id)}>
            <FaEdit />
          </button>
          {todo.editing ? (
            <button onClick={() => props.onSaveTodo(todo.id, props.editText)}>
              Save
            </button>
          ) : (
            <button className='delete_btn' onClick={() => props.onDeleteTodo(todo.id)}>
              <FaTrashAlt />
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList

