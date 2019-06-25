import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import PhotoFinder from './components/PhotoFinder/PhotoFinder';

import './App.css';

const initialState = {

}

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  render() {
    return (
      <div className="App">
        <div>
          <Logo />
          <PhotoFinder apiUrl={apiUrl} />
        </div>
      </div>
    )
  }
}

export default App;
