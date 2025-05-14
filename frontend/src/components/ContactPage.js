import React, { useState, useRef } from 'react';
import './ContactPage.css'; // Import the CSS file for styling
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toastify CSS

const ContactPage = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dr5nawp', 'template_rfy01wp', form.current, 'EwzU6GZ4a4AwpiGvF')
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-center',
            autoClose: 1000, 
          });
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          toast.error('Failed to send message, please try again.', {
            position: 'top-center',
            autoClose: 1000,
          });
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      color: 'white',
      textAlign: 'center',
      marginBottom: '20px'
    }}>
      Say Hello To Us, Get In Touch
    </h2>
    <p style={{
      fontFamily: "'Raleway', sans-serif",
      fontSize: '1.2rem',
      color: 'white',
      fontSize : '27px',
      textAlign: 'center',
      lineHeight: '1.5',
      marginBottom: '30px'
    }}>
      Reach out to us and we will respond as soon as we can.
    </p>
      <div className="contact-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name.."
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email.."
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write something.."
            rows="4"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Image to the right of the form */}
      </div>

      {/* Toast container to display the notifications */}
      <ToastContainer />
    </div>
  );
};

export default ContactPage;