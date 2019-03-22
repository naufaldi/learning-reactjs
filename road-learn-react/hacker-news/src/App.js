import React, { Component } from 'react';
import './App.css';


const DEFAILT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='

const url =`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAILT_QUERY}`

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      result: null,
      searchTerm: DEFAILT_QUERY
    };
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
