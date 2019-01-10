import React, { Component } from 'react';
import ReactFormLabel from './ReactFormLabel';
import $ from 'jquery';

class ReactForm extends React.Component {
  constructor(props) {
   super(props)
 
   this.state = {
    name: '',
    job: '',
    // subject: '',
    // message: ''
   }
 
   this.handleChange = this.handleChange.bind(this)
   this.handleSubmit = this.handleSubmit.bind(this)
  }
 
  handleChange = (e) => {
   let newState = {}
 
   newState[e.target.name] = e.target.value
 
   this.setState(newState)
  }
 
 
  handleSubmit = (e, message) => {
   e.preventDefault()
 
   let formData = {
    formSender: this.state.name,
    formJob: this.state.job,
    // formSubject: this.state.subject,
    // formMessage: this.state.message
   }
 
   if (formData.formSender.length < 1 || formData.formJob.length < 1 ) {
    return false
   }
 
   $.ajax({
    url: 'https://reqres.in/api/users',
    dataType: 'json',
    type: 'POST',
    data: formData,
    success: function(data){
        console.log(data);
    },
    error: function(xhr, status, err) {
     console.error(status, err.toString())
     alert('There was some problem with sending your message.')
    }
   })
 
 
   this.setState({
   name:'',
    job: '',
    // subject: '',
    // message: ''
   })
  }
 
  render() {
   return(
    <form className='react-form' onSubmit={this.handleSubmit}>
     <h1>Say Hi!</h1>
 
     <fieldset className='form-group'>
      <ReactFormLabel htmlFor='formName' title='Full Name:' />

      <input id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
     </fieldset>
 
     <fieldset className='form-group'>
      <ReactFormLabel htmlFor='formJob' title='Job:' />
 
      <input id='formJob' className='form-input' name='job' type='text' required onChange={this.handleChange} value={this.state.job} />
     </fieldset>
 
     {/* <fieldset className='form-group'>
      <ReactFormLabel htmlFor='formSubject' title='Subject:'/>
 
      <input id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
     </fieldset>
 
     <fieldset className='form-group'>
      <ReactFormLabel htmlFor='formMessage' title='Message:' />
 
      <textarea id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>
     </fieldset> */}
 
     <div className='form-group'>
      <input id='formButton' className='btn' type='submit' placeholder='Send message' />
     </div>
    </form>
   )
  }
 }

 export default ReactForm;