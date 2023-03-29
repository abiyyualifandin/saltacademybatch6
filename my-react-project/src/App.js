import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cheader from './header';
import Cfooter from './footer';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Barjo",
      address: "Jakarta",
      class: "Salt Academy Batch 6"
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <Cheader
              headerName={this.state.name}
              headerAddress={this.state.address}
              headerClass={this.state.class}
            />

            <img src={logo} className="App-logo" alt="logo" />

            <Cfooter
              headerName={"NAME FOOTER"}
              headerAddress={"ADDRESS FOOTER"}
              headerClass={"CLASS FOOTER"}
            />
          </header>
        </div>
      </>
    )
  }
}

export default App;