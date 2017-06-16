import React from 'react';
import Contacts from './Contact';

class ContactsList extends React.Component {
    constructor(){
        super();
        this.state = {
            search: 'Level Up'
        };
    }
    updateSearch(){
        this.setState({search:event.target.value.substr(0,20)});
    }
    render(){
        return (
            <div>
            <ul>
            {this.props.contacts.map((contact)=> {
                return <Contacts contact={contact} key={contact.id}/>
            })}
            </ul>
            <input type="text" value={this.state.search}
            onChange={this.updateSearch.bind(this)}/>
            </div>
        )
    }
}

export default ContactsList;