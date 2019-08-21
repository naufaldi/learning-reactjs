import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asd1',name: 'Max', age: 28 },
      { id: 'asd2',name: 'Manu', age: 29 },
      { id: 'asd3',name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ],
  //     otherState: 'some value',
  //     showPersons: false
  //   } )
  // }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({
      persons: persons
    })
  }

  nameChangedHandler = (event,id) => {
    this.setState( {
      persons: [
        { id:'asd1', name: 'Max', age: 28 },
        { id:'asd2', name: event.target.value, age: 29 },
        { id:'asd3', name: 'Stephanie', age: 26 }
      ]
    } )
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person,index) => {
          return <Person
            click={()=> this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event)=>this.nameChangedHandler(event,person.id)}
          />
        })}
          </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
