import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


export default class App extends Component {
  state={
    persons: [
      { name : 'Max', age: 28 },
      { name : 'Marti', age: 29 },
      { name : 'Morgan', age: 26 },
    ],
    otherState : 'some other value'
  }


  render() {
    return (
      <div>
      <h1>Hi App JS</h1>
      <p>This list name</p>

    <Person/>
      </div>
    )
  }
}

