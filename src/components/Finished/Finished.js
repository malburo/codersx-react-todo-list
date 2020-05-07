import React from 'react';

class Finished extends React.Component {
  render(){
    const { finished, onClick } = this.props;
    const finishedList = finished.map((item, index) => {
      return <li key={index} className="item" onClick={onClick(item)}><p>{item.content}</p></li>
    })
    return (
      <div className="Finished">
        {
          finished.length > 0 &&
        <p className="status">FINISHED</p>
        }
        <ul>
        {
          finishedList
        }
        </ul>
      </div>
    )
  }
}
export default Finished;
