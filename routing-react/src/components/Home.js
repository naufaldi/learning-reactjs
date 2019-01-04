import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
      <div>
    <nav>
      <ul>
        <li><Link to='/'>Header</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
        
      </div>
    )
  }
}

export default Home
