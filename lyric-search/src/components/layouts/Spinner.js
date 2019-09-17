import React, { Component } from 'react'
import Spinners from '../../img/load.svg'

export default class Spinner extends Component {
  render() {
    return (
      <React.Fragment>
            <img src={Spinners} alt="loading" style={{width:'150px', margin:'40px auto',display:'block'}} />
      </React.Fragment>
    )
  }
}
