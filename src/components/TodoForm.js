import React from 'react'

export default props =>
  <form onSubmit={props.handleSubmit} data-cy='input-form'>

    <input
      type='text'
      className="new-todo" 
      value={props.currentTodo} 
      onChange={props.handleNewTodoChange} 
      autoFocus data-cy="input"
      placeholder="What needs to be done?"/>
  </form>
