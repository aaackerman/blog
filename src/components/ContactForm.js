import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';

const FORM_NAME = 'contact';

const ContactForm = () => {
  const [formSubmitMessage, setFormSubmitMessage] = useState('');

  const encode = (data) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');

  const onSubmit = (formValues) => {
    return fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': FORM_NAME,
        ...formValues
      })
    })
      .then(() => {
        setFormSubmitMessage("Thanks for your message! I'll be in touch.");
      })
      .catch(() => {
        setFormSubmitMessage(
          'Oops! Somethign went wrong. Try reaching out on LinkedIn.'
        );
      });
  };

  return (
    <div className="row">
      <div className="8u 12u$(small)">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form }) => (
            <div>
              <form
                name={FORM_NAME}
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={async (event) => {
                  await handleSubmit(event);
                  form.reset();
                }}
              >
                <Field
                  type="hidden"
                  name="form-name"
                  value="contact"
                  component="input"
                />

                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      component="input"
                      required
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      component="input"
                      required
                    />
                  </div>
                  <div className="12u">
                    <Field
                      name="message"
                      id="message"
                      component="textarea"
                      placeholder="Message"
                      rows="4"
                      required
                    />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <button type="submit">Send message</button>
                  </li>
                  <li>
                    <p className="form-message">{formSubmitMessage}</p>
                  </li>
                </ul>
              </form>
            </div>
          )}
        />
      </div>
      <div className="4u 12u$(small)">
        <ul className="labeled-icons">
          <li>
            <h3 className="icon fa-linkedin">
              <span className="label">Add me on LinkedIn</span>
            </h3>
            <a
              href="http://linkedin.com/in/aaackerman"
              target="_blank"
              rel="noopener noreferrer"
            >
              /in/aaackerman
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
