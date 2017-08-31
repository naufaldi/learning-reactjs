import React from 'react';
import Players from './Players.js';
class Leaderboard extends React.Component {
  render() {
      const PLAYERS = [
          { id: 1,name: "Brenda Inch", score: 25},
          { id: 2, name: "Naufaldi", score : 30},
          {id : 3, name: "Rafif", score: 10}
      ]
        const styles = {
          container: {
            padding: 60
          }
        }
    return(
    <div style={styles.container}>
      <h1> Leaderboard</h1>
      <Players members = { PLAYERS} />
    </div>
    )
  }
}

export default Leaderboard;
