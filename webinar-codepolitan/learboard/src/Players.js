import React from "react";
import Player from './Player.js';

class Players extends React.Component {
  render() {
    return (
      <div>
        {this.props.members.map(player => {
            return (
                <Player key={player.id} name={player.name} score={player.score} />
          )
        })}
      </div>
    );
  }
}

export default Players;
