import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss(id){
    // const isNotId = item => item.objectID !== id;
    //   const updatedList = this.state.list.filter(isNotId);
    const updatedList = this.state.list.filter(item => item.objectID !== id);
    this.setState({ list: updatedList });

  }
  render() {
    return (
      <div className="App">
        {this.state.list.map(item => 
          <div key={item.objectID} >
          <span>
            <a href="{item.url}">{item.title}</a>
          </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <button
              onClick={()=> this.onDismiss(item.objectID)}
              type="button"
              >
              Dismiss
              </button>
            </span>
          </div>          
        )}
      </div>
    );
  }
}

export default App;
