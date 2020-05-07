import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Upcomming from './components/Upcoming/Upcoming'
import Finished from './components/Finished/Finished'
import NewTodo from './components/NewTodo/NewTodo'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: {content: "", isComplete: false},
      todos: [],
      finished: []
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
  handleClickItemFinished = (item) => {
    return event => {
      const { finished } = this.state;
      const index = finished.indexOf(item);
      this.setState({
        finished: [
          ...finished.slice(0, index),
          ...finished.slice(index+1)
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
        <Header/>
          <div className="body">
          {
            this.state.todos.length === 0 && this.state.finished.length === 0 &&
            <img className="emty" src="https://res.cloudinary.com/malburo/image/upload/v1588845860/undraw_blooming_jtv6_lebyn9.svg" alt="emty"/>
          }
          <Upcomming todos={this.state.todos} onClick={this.handleClickItem}/>
          <Finished finished={this.state.finished} onClick={this.handleClickItemFinished}/>
        </div>
        <NewTodo onClick={this.handleClickAddNewTodo} onChange={this.handleChangeInput} value={this.state.newTodo.content}/>
      </div>
    )
  }
}
export default App;
