import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutProducts.css'; 
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="services-page">
      {/* Top Icons Section */}

      {/* Meet Our Doctors Section */}
      <div className="container text-center">
        <h3 className="mb-5" data-aos="fade-up">Meet Our Expert Doctors</h3>
        <div className="row">
          <div className="col-md-4 mb-4" data-aos="zoom-in">
            <div className="card h-100">
              <div className="Center">
                <img
                  src="\images\call-icon 1.png"
                  className="card-img-top"
                  alt="Phone Consultation"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-success">Phone Consultation</h5>
                <p className="card-text">
                Get medical advice from our experienced doctors over the phone.
                </p>
                <a href="/appointmentForm" className="btn btn-outline-success j">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="card h-100">
              <div className="Center">
                <img
                  src="\images\chat-icon 1.png"
                  className="card-img-top"
                  alt="Clinic Consultation"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-success">Clinic Consultation</h5>
                <p className="card-text">
                  Consult with our experienced doctors for an in-clinic
                  consultation to treat your health issues timely.
                </p>
                <a href="/appointmentForm" className="btn btn-outline-success j">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="card h-100">
              <div className="Center">
                <img
                  src="\images\mail-icon 1.png"
                  className="card-img-top"
                  alt="Video Consultation"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-success">Video Consultation</h5>
                <p className="card-text">
                  Seek proper medical advice through a video call with doctors
                  from the comfort of your home.
                </p>
                <a href="/appointmentForm" className="btn btn-outline-success j">
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;