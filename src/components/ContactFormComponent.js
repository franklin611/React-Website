import React, { useState } from 'react';

const ContactFormComponent = () => {
  // State to manage form data
  // setFormData will be used to change the values of name, email, and message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); //TODO: Work on Form Submission 
    // Clear the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        className="form-input"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        className="form-input"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        className="form-textarea"
      ></textarea>
      <button type="submit" className="form-button">
        SEND ME
      </button>
    </form>
  );
};

export default ContactFormComponent;
