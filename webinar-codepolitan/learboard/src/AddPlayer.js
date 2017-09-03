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
    addPlayer(event){
        this.props.onAdd(this.state.name)
        this.setState({
            name: " "
        })
    }
    render() {
        const styles = {
            container : {
                padding : 10
            },
            input: {
                flex : 1,
                paddingRight: 20,
                width: "45%",
                height: 27
            },
            button : {
                float : "right",
                marginRight : 80,
                width : 120,
                padding : 10
            }
        }
        return (
            <div style={styles.container} className="AddPlayer">
                <input style={styles.input} onChange={this.onPlayerChange} type="text" placeholder="Add Your Player Name Here" value={this.state.name}/>
                <button style={styles.button} onClick={this.addPlayer}>Add Player</button>
            </div>
        );
    }
}

export default AddPlayer