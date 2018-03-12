import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Input from './components/input'
import TodoItem from './components/todoItem'


class App extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      todos: [
        {id:0, text:"Make dinner tonight!"},
        {id:1, text:"Make dinner !"},
        {id:2, text:"dinner tonight!"}
      ],
      nexId: 3
    }
  }
  addTodo(todoText) {
    console.log("Todo added; ", todoText);
    let todos = this.state.todos.slice();
    todos.push({id:this.state.nexId,text:todoText});
    this.setState({
      todos: todos,
      nexId: ++this.state.nexId
    });

  }
  removeTodo(id) {
    console.log("removing: " ,id);
    this.setState({
      todos: this.state.todos.filter((todo,index) => todo.id !== id)
    })
  }
  editItem(id) {
    console.log("editando");
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header/>
          <Input todoText="" hola ="" addTodo={this.addTodo}/>
          <ul>
            {
              this.state.todos.map((todo)=> {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} editItem={this.editItem}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
