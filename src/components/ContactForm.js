import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formName = form.getAttribute('name');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': formName,
        name,
        email,
        message
      })
    }).then(clearForm);
  };

  return (
    <div className="row">
      <div className="8u 12u$(small)">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="row uniform 50%">
            <div className="6u 12u$(xsmall)">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="6u 12u$(xsmall)">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="12u">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <ul className="actions">
            <li>
              <button type="submit">Send message</button>
            </li>
          </ul>
        </form>
      </div>
      <div className="4u 12u$(small)">
        <ul className="labeled-icons">
          <li>
            <h3 className="icon fa-linkedin">
              <span className="label">Add me on LinkedIn</span>
            </h3>
            <a href="http://linkedin.com/in/aaackerman" target="_blank">
              /in/aaackerman
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
