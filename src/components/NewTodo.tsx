import React, { useRef } from 'react'
import './NewTodo.css'

type NewTodoProps = {
  onNewTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // useRef is a generic type. We can pass a type to it.
  const todoTextInputRef = useRef<HTMLInputElement>(null)

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()

    // .current is a property that holds the current value of the ref.
    const enteredText = todoTextInputRef.current!.value
    props.onNewTodo(enteredText)

    // clear the input field
    todoTextInputRef.current!.value = ''
  }

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">New ToDo</label>
        <input type="text" id="todo-text" ref={todoTextInputRef} />
      </div>
      <button type="submit">Add To List</button>
    </form>
  )
}

export default NewTodo
