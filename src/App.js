import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import PhotoFinder from './components/PhotoFinder/PhotoFinder';

import './App.css';

const initialState = {
  camera: '',
  sol: 1,
  maxSol: 2446,
  photos: []
}

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onCameraChange = (event) => {
    this.setState({})
  }

  onSolChange = (event) => {
    this.setState({sol: event.target.value})
  }

  onButtonSubmit = (event) => {

  }

  render() {
    const {maxSol, sol, photos} = this.state
    return (
      <div className="App">
        <div>
          <Logo />
          <PhotoFinder
            apiUrl={apiUrl}
            maxSol={maxSol}
            sol={sol}
            onSolChange={this.onSolChange}
            onButtonSubmit={this.onButtonSubmit}
            onCameraChange={this.onCameraChange} />
        </div>
      </div>
    )
  }
}

export default App;
