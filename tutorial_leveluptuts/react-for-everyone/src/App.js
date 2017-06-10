import React from 'react';
import {render} from 'react';
import ContactsList from './ContactsList';

let contacts = [{
    id: 1,
    name : 'scot',
    phone: '5555 22 41'
}, {
    id: 2,
    name: 'naufal',
    phone: '55 22 551'
}, {
    id: 3,
    name : 'nugra',
    phone: '773 9423 22'
}, {
    id: 4,
    name: 'uzan',
    phone: '332 518 884'
}]

class App extends React.Component {
    render(){
        return (
            <div>
            <h1>Contact List</h1>
            <ContactsList contacts={this.props.contacts} />
            </div>
        )
    }
}

render(<App contacts={contacts}/>, document.getElementById('app'));