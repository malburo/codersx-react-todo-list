import React from 'react';
import './App.css';

const todos = [
  'Go to market',
  'Buy food',
  'Make dinner'
];

class App extends React.Component {
  render(){
    let items = todos.map(item => {
      return <li>{item}</li>
    })
    return (
      <div className="App">
        <ul>{items}</ul>
      </div>
    )
  }
}
export default App;
