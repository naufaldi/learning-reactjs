import React, { Component } from 'react'
import {Consumer} from '../../context'
import axios from 'axios';
export default class Search extends Component {
  state = {
    trackTitle:''
  }
  findTrack = (dispatch,e)=> {
    e.preventDefault();
    axios.get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
    )
    .then(res => {
      dispatch({
        type: 'SEARCH_TRACKS',
        payload: res.data.message.body.track_list
      })
      this.setState({
        trackTitle:''
      })
    })
    .catch(err => {
      console.log("Error")
    })
  }
  onChange = (e)=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <Consumer>
        {
          value => {
            const {dispatch} = value;
            return (
              <div className="card card-body mb-4 p-4">
                <h4 className="display-4 text-center">
                  <i className="fas fa-music">
                    Search for Song
                  </i>
                </h4>
                <p>Search anysong do you like</p>
                <form action="" onSubmit={this.findTrack.bind(this,dispatch)}>
                  <div className="form-group">
                    <input type="text"
                      className="form-control form-control-lg"
                      placeholder="Name of Song"
                      name="trackTitle"
                      value={this.state.trackTitle}
                      onChange={this.onChange}
                    />
                  </div>
                  <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Lyrich</button>
                </form>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}
