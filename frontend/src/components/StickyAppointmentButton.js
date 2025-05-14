import React from 'react';
import './StickyAppointmentButton.css';

const StickyAppointmentButton = () => {
  return (
    <a href="/appointmentForm" className="sticky-appointment-btn">
      <i className="fas fa-calendar-check"></i> Book Appointment
    </a>
  );
};

export default StickyAppointmentButton;
