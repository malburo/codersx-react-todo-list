import React from 'react';
import './App.css';

import Upcomming from './components/Upcoming/Upcoming'
import Finished from './components/Finished/Finished'
import NewTodo from './components/NewTodo/NewTodo'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: {content: "", isComplete: false},
      todos: [
        {content: "Đi chợ", isComplete: false},
        {content: "Đi học", isComplete: false}
      ],
      finished: [
        {content: "Đi ngủ", isComplete: true}
      ]
    }
  }
  handleClickItem = (item) => {
    return event => {
      const { todos, finished } = this.state;
      const index = todos.indexOf(item);
      this.setState({
        todos: [
          ...todos.slice(0, index),
          ...todos.slice(index+1)
        ],
        finished: [
          ...finished,
          {...item, isComplete: true}
        ]
      })
    }
  }
  handleChangeInput = (event) => {
    const { newTodo } = this.state;
    this.setState({
      newTodo: {...newTodo, content: event.target.value}
    })
  }
  handleClickAddNewTodo = (event) => {
    const { todos, newTodo } = this.state;
    const content = newTodo.content.trim();
    if(!content){
      return;
    }
    this.setState({
      todos: [
        newTodo,
        ...todos
      ],
      newTodo: {...newTodo, content: ""}
    })
  }
  render(){
    return (
      <div className="App">
        <Upcomming todos={this.state.todos} onClick={this.handleClickItem}/>
        <Finished finished={this.state.finished}/>
        <NewTodo onClick={this.handleClickAddNewTodo} onChange={this.handleChangeInput} value={this.state.newTodo.content}/>
      </div>
    )
  }
}
export default App;
