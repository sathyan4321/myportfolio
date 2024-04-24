import React from 'react';
import './Contact.scss';

function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('https://script.google.com/macros/s/AKfycbx_PMCesp8EmzOHXoEHFj8L_-IOmcy9DnDEQxpsTI5mr9VjLeIn3pkHU6zgI4j38bceag/exec', {
      method: 'POST',
      body: formData
    });
    if (response.ok) {
      alert('Message sended successfully!');
      event.target.reset();
    } else {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='contact'>
      <h1>Contact Me</h1>
      <div className={`register-form`}>
        <form onSubmit={handleSubmit} className='form'>
          <input type="text" name="name" placeholder='Name' required autoFocus/>
          <input type="email" name="email" placeholder='Email' required />
          <textarea type="textarea" name="Message" placeholder='Message' required className='message'/>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
