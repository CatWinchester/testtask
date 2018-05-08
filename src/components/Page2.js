import React, { Component } from 'react';
class Page2 extends Component {
  render() {
    return (
      <div className="Page2">
        2
        <h4>Timer: {this.props.timer}</h4>
      </div>
    );
  }
}

export default Page2;
