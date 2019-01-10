import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css'
import ReactForm from './component/ReactForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
         Uji Coba React
        </header>
        <ReactForm/>
      </div>
    );
  }
}

export default App;
