import React from 'react';

class Child extends React.Component {
    render(){
        return <div onClick={this.props.counterClick}>  {this.props.text}</div>
    }
}

export default Child;