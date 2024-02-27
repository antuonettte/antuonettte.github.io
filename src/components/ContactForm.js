import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
      <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;