import React, { useState } from 'react'

function EditTodo({editTodo, task}) {
  const [value, setValue] = useState(task.task);
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value,task.id);
    setValue("")
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={value} placeholder='Update the task' onChange={(e) => setValue(e.target.value)} />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodo
