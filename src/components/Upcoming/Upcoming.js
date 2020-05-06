import React from 'react';

class Upcomming extends React.Component {
  render(){
    const { todos, onClick } = this.props;
    const todosList = todos.map((item, index) => {
    return <li onClick={onClick(item)} key={index}>{index+1}.{item.content}</li>
    })
    return (
      <div className="Upcomming">
        <ul>
        {
          todosList
        }
        </ul>
      </div>
    )
  }
}
export default Upcomming;
