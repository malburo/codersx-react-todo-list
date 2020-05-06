import React from 'react';

class NewTodo extends React.Component {
  constructor(){
    super()
    this.state = {
      isHidden: false
    }
  }
  handleClickShowModel = (e) => {
    this.setState({
      isHidden: true
    })
  }
  render(){
    const { onClick, onChange, value } = this.props
    return (
      <div className="NewTodo">
        {
          this.state.isHidden &&
        <div>
          <input type="text" onChange={onChange} value={value}/>
          <button onClick={onClick}>Add</button>
        </div>
        }
        <button onClick={this.handleClickShowModel}>+</button>
      </div>
    )
  }
}
export default NewTodo;
