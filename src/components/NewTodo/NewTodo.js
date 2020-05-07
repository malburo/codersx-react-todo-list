import React from "react";

class NewTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: false,
    };
  }
  handleClickShowModel = (e) => {
    this.setState({
      isHidden: true,
    });
  };
  render() {
    const { onClick, onChange, value } = this.props;
    return (
      <div className="NewTodo">
        {this.state.isHidden && (
          <div>
            <input type="text" onChange={onChange} value={value} />
            <button onClick={onClick}>Add</button>
          </div>
        )}
        {!this.state.isHidden && (
          <img
            src="https://res.cloudinary.com/malburo/image/upload/v1588841337/plus_r5d4le.svg"
            onClick={this.handleClickShowModel}
            className="addIcon"
            alt="add"
          />
        )}
      </div>
    );
  }
}
export default NewTodo;
