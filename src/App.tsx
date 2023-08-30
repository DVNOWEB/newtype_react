import React, { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo'
import { Todo } from './model'


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [editText, setEditText] = useState('')

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text, editing: false },
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId)
    })
  }

  const todoEditHandler = (todoId: string) => {
    const todoToEdit = todos.find((todo) => todo.id === todoId)
    if (todoToEdit) {
      setEditText(todoToEdit.text)
      setTodos((prevTodos) => {
        return prevTodos.map((todo) =>
          todo.id === todoId
            ? { ...todo, editing: true }
            : { ...todo, editing: false }
        )
      })
    }
  }

  const todoSaveHandler = (todoId: string, newText: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, text: newText, editing: false } : todo
      )
    })
  }

  return (
    <div className="App">
      <NewTodo onNewTodo={todoAddHandler} />
      <TodoList
        items={todos}
        onDeleteTodo={todoDeleteHandler}
        onEditTodo={todoEditHandler}
        onSaveTodo={todoSaveHandler}
        editText={editText} // Pass the editText state as a prop
        onEditTextChange={setEditText} // Pass the state updater function
      />
    </div>
  )
}


export default App