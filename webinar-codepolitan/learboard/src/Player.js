import React  from 'react'

 class Player extends React.Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.name}
                    <div>
                    <div>
                        <button> - </button>
                        <span> {this.props.score} </span>
                        <button> + </button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Player;