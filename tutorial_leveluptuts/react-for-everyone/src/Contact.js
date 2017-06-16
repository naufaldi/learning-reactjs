import React from 'react';

class Contact extends React.Component {
    render(){
        return (
            <ul>
                <li>{this.props.contact.name} {this.props.contact.phone} </li>
            </ul>
        )
    }
}

export default Contact;