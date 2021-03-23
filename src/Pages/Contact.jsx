import React, { Component } from 'react';
import '../Styling/Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      thanks: false,
    };
  }

  encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) +
          '=' +
          encodeURIComponent(data[key])
      )
      .join('&');
  };

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: this.encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => {
        this.setState({ thanks: true }, () => {
          setTimeout(() => this.setState({ thanks: false }), 3000);
        });
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className='Contact' id='Contact'>
        <div className='container'>
          <h2>Contact</h2>

          <form className='contact-form' onSubmit={this.handleSubmit}>
            <input
              className='contact-name'
              type='text'
              name='name'
              value={name}
              placeholder='Name'
              onChange={this.handleChange}
            />
            <input
              className='contact-email'
              type='email'
              name='email'
              value={email}
              placeholder='Email'
              required
              onChange={this.handleChange}
            />
            <textarea
              className='contact-message'
              name='message'
              value={message}
              placeholder='Message'
              onChange={this.handleChange}
            />
            <input
              className='contact-submit'
              type='submit'
              value='Send Message'
            />
          </form>
          {this.state.thanks && (
            <div className='thanks'>
              <h4>
                Thank you for reaching out!{' '}
                <span role='img' aria-label='rocket'>
                  🚀
                </span>
              </h4>
              <p>
                I appreciate that you’ve taken the time to write me.
                I’ll get back to you very soon!
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;