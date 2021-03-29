import React, { Component } from 'react';
import '../Styling/Contact.css';
import emailjs from 'emailjs-com';

export default class Contact1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            thanks: false,
        };
    }

    sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_z6bp0d7', 'template_753sl29', e.target, 'user_L3bGmO8jrbDCd34mER3om')
    .then(() => {
        this.setState({ thanks: true }, () => {
          setTimeout(() => this.setState({ thanks: false }), 3000);
        });
      })
      e.target.reset()
    }

    render() {
        return (
            <div className="Contact">
                <div className="container">
                <h2>Contact</h2>
                    <form className="contact-form" onSubmit={this.sendEmail}>
                        <div>
                            <input 
                                type="text"
                                className="contact-name"
                                placeholder="Name"
                                name="name"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="contact-email"
                                placeholder="Email Address"
                                name="email"
                            />
                        </div>
                        <div>
                            <input  
                                type="text"
                                className="contact-subject"
                                placeholder="Subject"
                                name="subject"
                            />
                        </div>
                        <div>
                            <textarea
                                className="contact-message"
                                id=""
                                cols="30"
                                rows="30"
                                placeholder="Your message"
                                name="message">
                            </textarea>
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="contact-submit"
                                value="Send Message"
                            />
                        </div>
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
        )
    }

    
}