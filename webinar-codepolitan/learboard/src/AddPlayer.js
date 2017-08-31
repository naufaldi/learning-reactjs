import React from 'react'

class AddPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            name: ""
        }
        //dibinding agar this bisa berjalan
        this.onPlayerChange = this.onPlayerChange.bind(this)
        this.addPlayer = this.addPlayer.bind(this)
    }
    onPlayerChange(event){
        this.setState({
            name : event.target.value
        })
    }
    render() {
        return (
            <div>
                <input onChange={this.onPlayerChange} type="text" placeholder="Add Your Player Name Here" value={this.state.name}/>
                <button onClick={this.addPlayer}>Add Player</button>
            </div>
        );
    }
}

export default AddPlayer