import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
       <Header />
       {routes}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
