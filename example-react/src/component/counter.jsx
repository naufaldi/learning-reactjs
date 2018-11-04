import React, { Component } from "react";

class Counter extends Component {
  //anydata for component need
  state ={
    count: 2  ,
    tags: ['tag1','tag2','tag3']
  };
  // renderTags(){
  //   if (this.state.tags.length === 0) return <p>There is no Tags!</p>;

  //   return <ul>{this.state.tags.map( tag => <li key={tag}> {tag}</li> )}</ul>;
  // }
  handleIncrement(){
    console.log("Clicked");
  }

  render() {
    return (
      <div>
        {/* Dinamic */}
        <span  className={this.GetBadgeClasses()} > {this.formatCount()} </span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm" >Increment</button>
         <ul>{this.state.tags.map( tag => <li key={tag}> {tag}</li> )}</ul>;
      </div>
    );
  }
  GetBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
