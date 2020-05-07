import React from "react";

class Upcomming extends React.Component {
  render() {
    const { todos, onClick } = this.props;
    const todosList = todos.map((item, index) => {
      return (
        <li onClick={onClick(item)} key={index} className="item">
          <p>
            {index + 1}. {item.content}
          </p>
        </li>
      );
    });
    return (
      <div className="Upcomming">
        {todos.length > 0 && <p className="status">UPCOMING</p>}
        <ul>{todosList}</ul>
      </div>
    );
  }
}
export default Upcomming;
