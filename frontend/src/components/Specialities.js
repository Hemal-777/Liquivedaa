import React from 'react';
import './Specialties.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Specialties = () => {
  const specialties = [
    {
      title: "Ayurvedic Consultations",
      description: "Personalized consultations to assess your dosha and create tailored wellness plans.",
      benefits: [
        "Individualized health assessments",
        "Holistic approach to wellness",
        "Dietary recommendations",
      ],
    },
    {
      title: "Herbal Remedies",
      description: "Utilization of natural herbs to treat various ailments and enhance overall health.",
      benefits: [
        "Natural treatment options",
        "Supports the body's healing process",
        "Minimally invasive therapies",
      ],
    },
    {
      title: "Panchakarma Therapy",
      description: "A comprehensive detoxification and rejuvenation process that revitalizes the body.",
      benefits: [
        "Deep cleansing of the body",
        "Restores balance and vitality",
        "Improves mental clarity",
      ]
    },
  ];

  return (
    <div className="specialties-container">
      <h1>Our Specialties</h1>
      {specialties.map((specialty, index) => (
        <div className="specialty" key={index}>
          <h2>{specialty.title}</h2>
          <p>{specialty.description}</p>
          <h3>Benefits:</h3>
          <ul>
            {specialty.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Specialties;