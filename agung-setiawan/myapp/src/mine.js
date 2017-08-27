import React from "react";
import Child from "./Child";

class Mine extends React.Component {
  constructor() {
    //import from parent react
    super();
    this.state = { texts: [], color: " " , counter: 0}
    this.ChangeColor = this.ChangeColor.bind(this)
    this.counterClick = this.counterClick.bind(this)
  }
  componentDidMount() {
    this.setState({
      texts: ["Belajar React Js", "Sungguh", "Menyenangkan"],
      color: "green"
    });
  }
ChangeColor(){
    if(this.state.color === 'green'){
        this.setState({color: 'blue'})
    } else {
        this.setState({color: 'green'})
    }
}
counterClick(){
    this.setState({counter: this.state.counter +  1})
}
  render() {
    let texts = this.state.texts.map(function(text) {
      return <Child text={text} counterClick={this.counterClick} />
    },this)
    let style = { color: this.state.color };

    return (
      <div style={style} onClick={this.ChangeColor}>
        <div id="Mine">Halo Dunia</div>
        <div>React is Awesome</div>
        {texts}
        {this.state.counter}
        <br />
      </div>
    );
  }
}

export default Mine;
