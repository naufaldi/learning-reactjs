import React from 'react';
import Players from './Players.js';
import AddPlayer from './AddPlayer.js'
class Leaderboard extends React.Component {
  constructor(props){
       const PLAYERS = [
          { id: 1,name: "Brenda Inch", score: 25},
          { id: 2, name: "Naufaldi", score : 30},
          {id : 3, name: "Rafif", score: 10}
      ]
      super(props)
      this.state ={
        members : PLAYERS
      }
  }
  render() {
        const styles = {
          container: {
            padding: 60
          }
        }
    return(
    <div style={styles.container}>
      <h1> Leaderboard</h1>
      <Players members={ this.state.members} />
      <AddPlayer/>
    </div>
    )
  }
}

export default Leaderboard;
