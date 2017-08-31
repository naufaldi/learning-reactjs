import React  from 'react'

 class Player extends React.Component {
     constructor(props) {
         //inisiasi orang tua
         //add props for parameter, so props can add value
         super(props)
         this.state = {
             score: this.props.score
         }
            //mengenai masalah this dan bind di javascript, karena this.incremetnScore tidak terbaca
            this.incrementScore = this.incrementScore.bind(this)
            this.decrementScore = this.decrementScore.bind(this)
     }
        incrementScore(event){
            this.setState({
                score: this.state.score + 10
            })
        }
        decrementScore(event){
            this.setState({
                score: this.state.score - 10
            })
        }
    render() {
        const styles = {
            player : {
                display : 'flex',
                padding : 10
            },
            name : {
                flex : '1'
            },
            playerScore : {
                width : 200
            },
            score : {
                padding : 20
            },
            button : {
                padding : 10
            }
        }
        return (
            <div style={ styles.player}>
                <div style={styles.name}>
                    {this.props.name}
                </div>
                    <div style={ styles.playerScore}>
                    <div>
                        <button style={styles.button} onClick={this.decrementScore}> - </button>
                        <span style={styles.score}> {this.state.score} </span>
                        <button style={styles.button} onClick={this.incrementScore}> + </button>
                    </div>
                    </div>
                
            </div>
        )
    }
}


export default Player;