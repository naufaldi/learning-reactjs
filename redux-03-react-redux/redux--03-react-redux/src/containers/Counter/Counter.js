import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
            {/* Props ctr because its value to Redux */}
                <CounterOutput value={this.props.ctr} />
                {/* Pass to Props */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtrackCounter}  />
                <button onClick={this.props.onStoreResult}>Display Result</button>
                <ul>
                {this.props.storedResults.map((strResults) => {
									<li key={strResults.id} onClick={this.props.onDeleteResult}>{strResults.value}</li>
								})};
                </ul>
            </div>

        );
    }
}

// Giving Information what we need
const mapStateToProps = state => {
    return {
        // Counter from redux
        ctr: state.counter,
        storedResults: state.result
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // Dispatch an Action
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val : 10}),
        onSubtrackCounter: () => dispatch({type: 'SUBTRACK', val : 15}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT', val : 15}),
        onDeleteResult: () => dispatch({type: 'DELETE_RESULT', val : 15}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);