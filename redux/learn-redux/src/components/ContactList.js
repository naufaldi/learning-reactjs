import React from 'react'
import PropTypes from "prop-types";

const ContactList = ({children}) => (
  <div className="ContactList">
    {children}
  </div>
)

ContactList.protoTypes ={
  children: PropTypes.node
};

ContactList.defaultProps={
  children: []
}

export default ContactList