import React from 'react';

class Finished extends React.Component {
  render(){
    const { finished } = this.props;
    const finishedList = finished.map((item, index) => {
      return <li key={index}>{item.content}</li>
    })
    return (
      <div className="Finished">
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
