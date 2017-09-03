import React from 'react';
import './App.css'
import Players from './Players.js';
import AddPlayer from './AddPlayer.js'

class Leaderboard extends React.Component {
  constructor(props){
          super(props)
       const PLAYERS = [
          { id: 1,name: "Brenda Inch", score: 25},
          { id: 2, name: "Naufaldi", score : 30},
          {id : 3, name: "Rafif", score: 10}
      ]
      this.state ={
        members : PLAYERS
      }
      this.onPlayerAdd = this.onPlayerAdd.bind(this)
  }
    onPlayerAdd(name){
      // mengambil nama member yang sudah ada dahulu
      let new_members = this.state.members
      new_members.push({id: new_members.length + 1,name: name , score: 10})                
      this.setState ({
        members : new_members
      })
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
      <AddPlayer onAdd={this.onPlayerAdd}/>
    </div>
    )
  }
}

export default Leaderboard;
 