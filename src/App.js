import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 1,
      page2Timer:0,
    }
  }

  handleMenuClick(page) {
    if(page===2 && !this.timerId) this.startTimer()
    this.setState({
      currentPage: page
    })
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.setState({
        page2Timer: this.state.page2Timer + 1
      })
    }, 1000)
  }

  componetDidUnmount() {
    clearInterval(this.timerId)
  }
  render() {
    return (

      <div className="App">
        <menu>
            <li><a onClick={this.handleMenuClick.bind(this, 1)}>1</a></li>
            <li><a onClick={this.handleMenuClick.bind(this, 2)}>2</a></li>
            <li><a onClick={this.handleMenuClick.bind(this, 3)}>3</a></li>
        </menu>
        <div className="container">
          {this.state.currentPage===1 && <Page1 />}
          {this.state.currentPage===2 && <Page2 timer={this.state.page2Timer} />}
          {this.state.currentPage===3 && <Page3 />}
        </div>
      </div>
    );
  }
}

export default App;
