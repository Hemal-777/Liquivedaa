// import React, { useState } from 'react';
// import './AppointmentForm.css';

// const AppointmentForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http:localhost:8080/appointments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Appointment booked successfully!');
//         // Clear form after successful submission
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           date: '',
//           time: '',
//           message: '',
//         });
//       } else {
//         alert('Error booking appointment');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error booking appointment');
//     }
//   };

//   return (
//     <div className="appointment-page">
//       <div className="appointment-container">
//         <h2>Book Your Appointment</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Name</label>
//             <input 
//               type="text" 
//               name="name" 
//               value={formData.name} 
//               onChange={handleChange} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label>Email</label>
//             <input 
//               type="email" 
//               name="email" 
//               value={formData.email} 
//               onChange={handleChange} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label>Phone</label>
//             <input 
//               type="text" 
//               name="phone" 
//               value={formData.phone} 
//               onChange={handleChange} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label>Appointment Date</label>
//             <input 
//               type="date" 
//               name="date" 
//               value={formData.date} 
//               onChange={handleChange} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label>Preferred Time</label>
//             <input 
//               type="time" 
//               name="time" 
//               value={formData.time} 
//               onChange={handleChange} 
//               required 
//             />
//           </div>

//           <div className="form-group">
//             <label>Additional Message</label>
//             <textarea 
//               name="message" 
//               value={formData.message} 
//               onChange={handleChange} 
//             ></textarea>
//           </div>

//           <button type="submit" className="submit-btn">Book Appointment</button>
//           <a href='/' className='back'>Back</a>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppointmentForm;



import React, { useState, useRef } from 'react';
import './AppointmentForm.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_dr5nawp', 'template_ultohxr', form.current, 'EwzU6GZ4a4AwpiGvF')
      .then(
        () => {
          // Show success toast
          toast.success('Appointment booked successfully!', {
            position: 'top-center',
            autoClose: 1000, // Close after 1 second
          });

          // Clear form after successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            message: '',
          });
        },
        (error) => {
          // Show error toast
          toast.error('Failed to book appointment, please try again.', {
            position: 'top-center',
            autoClose: 1000, // Close after 1 second
          });
          console.error('Failed to send email:', error.text);
        }
      );
  };

  return (
    <div className="appointment-page">
      <div className="appointment-container">
        <h2>Book Your Appointment</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Appointment Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Preferred Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Additional Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Book Appointment</button>
          <a href='/' className='back'>Back</a>
        </form>
      </div>

      {/* Toast container to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default AppointmentForm;
