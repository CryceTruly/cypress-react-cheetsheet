import React from "react";

const TodoItem = props => (
  <li data-cy="listItem" className={props.isCompleted ? "completed" : null}>
    <div className="view">
      <input className="toggle" type="checkbox" checked={props.isCompleted} />
      <label>{props.name}</label>
      <button
        className="destroy"
        onClick={() => props.handleRemove(props.id)}
      />
    </div>
  </li>
);

export default props => (
  <div>
    <ul className="todo-list">
      {props.todos.map(todo => (
        <TodoItem handleRemove={props.handleRemove} key={todo.id} {...todo} />
      ))}
    </ul>
  </div>
);
