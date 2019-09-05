import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Footer from './Footer'
import {saveTodo,loadTodos,removeTodo} from "./../lib/service";

export default class TodoApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      currentTodo:''
    }
this.handleNewTodoChange=(evt)=>{
  this.setState({currentTodo:evt.target.value})
}
this.handleRemove=(id)=>{
  removeTodo(id).then(({data})=>{
    this.setState({todos:this.state.todos.filter(t=>t.id!==id)})
  })
}
  
this.handleSubmit=(event)=>{
  event.preventDefault();
  const todo={
    name:event.target.value,
    isComplete :false,
    id:98
  }

  saveTodo(todo).then(res=>{
    
    this.setState(
      {todos:this.state.todos.concat(res.data),currentTodo:''}
    )
    
     }) .catch(err=>this.setState({error:true}))

    }
  
  }

  componentDidMount(){
    loadTodos().then(({data})=>this.setState({todos:data})).catch(err=>this.setState({error:true}))
  }


  render () {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <span className="error">{this.state.error?'ooh know':null}</span>
   
            <TodoForm currentTodo={this.state.currentTodo}
            handleNewTodoChange={this.handleNewTodoChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
            />
          </header>
          <section className="main">
            <TodoList todos={this.state.todos} handleRemove={this.handleRemove} />
          </section>
          <Footer incompleteTodos={this.state.todos.filter(one=>one.isCompleted===false)}/>
        </div>
      </Router>
    )
  }
}
