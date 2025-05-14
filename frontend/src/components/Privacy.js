import React from 'react';
import './PrivacyPolicy.css'; 
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy for Ayurveda Website</h1>
      <p>
        At Liquiveda, accessible from [insert website URL], your privacy is of utmost importance to us. This Privacy Policy outlines the types of personal information that we collect and how we use it. By using our website, you hereby consent to our Privacy Policy and agree to its terms.
      </p>
      
      <h2>Information We Collect</h2>
      <p>
        We collect various types of information for various purposes to provide and improve our services. The types of data we collect include:
      </p>
      <ul>
        <li><strong>Personal Data:</strong> While using our website, you may be asked to provide us with certain personally identifiable information, including but not limited to your name, email address, and contact information.</li>
        <li><strong>Usage Data:</strong> We may collect information on how the website is accessed and used, including your IP address, browser type, and pages visited.</li>
        <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to monitor activity on our website and store certain information.</li>
      </ul>
      
      <h2>Use of Data</h2>
      <p>
        Liquiveda uses the collected data for various purposes, including:
      </p>
      <ul>
        <li>To provide and maintain our website and services</li>
        <li>To notify you about changes to our website and services</li>
        <li>To allow you to participate in interactive features of our website when you choose to do so</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our website and services</li>
        <li>To monitor the usage of our website</li>
      </ul>
      
      <h2>Disclosure of Data</h2>
      <p>
        We may disclose personal data in the good faith belief that such action is necessary to:
      </p>
      <ul>
        <li>Comply with a legal obligation</li>
        <li>Protect and defend our rights or property</li>
        <li>Prevent or investigate possible wrongdoing in connection with the website</li>
        <li>Protect the personal safety of users of the website or the public</li>
        <li>Protect against legal liability</li>
      </ul>

      <h2>Security of Data</h2>
      <p>
        The security of your data is important to us. We strive to use commercially acceptable means to protect your personal data, but please remember that no method of transmission over the internet or method of electronic storage is 100% secure.
      </p>

      <h2>Your Data Protection Rights</h2>
      <p>
        Liquiveda aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your personal data. If you wish to be informed about what personal data we hold about you and if you want it to be removed from our systems, please contact us.
      </p>

      <h2>Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul>
        <li>Email: Liquiveda@123.com</li>
        <li>Phone: 987-654-3210</li>
        <li>Website: [insert website URL]</li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;