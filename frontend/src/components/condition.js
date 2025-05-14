import React from 'react';
import './TermsAndConditions.css'; 
import { Link } from 'react-router-dom';// Make sure to import the CSS file

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
    <h1>Terms and Conditions for Baquiveda Digital Assets</h1>
    <p>
        These Terms and Conditions outline the rules and regulations governing the use of Baquiveda’s websites 
        (<a href="http://www.baquiveda.com">www.baquiveda.com</a>,
    </p>

    <h2>1. General Acceptance</h2>
    <p>
        By using our digital assets, you are bound by these terms. You are advised to review these terms regularly, as Baquiveda reserves the right to modify them without prior notice.
    </p>

    <h2>2. Intellectual Property Rights</h2>
    <p>
        All content on the digital assets, including but not limited to text, graphics, images, logos, trademarks, and software, is owned or licensed by Baquiveda. Users may not copy, modify, reproduce, or distribute this content without express permission from Baquiveda.
    </p>
    <ul>
        <li><strong>Copyright Protection:</strong> All proprietary content, including website layout, graphics, and design, is protected under applicable copyright laws.</li>
        <li><strong>Trademarks:</strong> All logos and brand names used on the site are trademarks of Baquiveda or its affiliates.</li>
    </ul>

    <h2>3. User Security</h2>
    <p>
        Users are responsible for maintaining the confidentiality of their login information. Any activity under your account is your responsibility, and you must take reasonable steps to secure your account. Baquiveda will not be liable for any unauthorized access.
    </p>

    <h2>4. Warranties Disclaimer</h2>
    <ul>
        <li><strong>No Medical Warranty:</strong> The information provided on the digital assets is not a substitute for medical consultation or treatment by licensed medical professionals.</li>
        <li><strong>Service Availability:</strong> Baquiveda does not warrant uninterrupted or error-free availability of its digital assets. Service interruptions or delays may occur due to technical issues.</li>
        <li><strong>Results:</strong> There is no guarantee that the use of Baquiveda’s digital services will treat or cure any disease.</li>
    </ul>

    <h2>5. Usage Restrictions</h2>
    <p>The following activities are strictly prohibited:</p>
    <ul>
        <li><strong>Illegal Activity:</strong> Uploading or circulating unlawful or harmful content.</li>
        <li><strong>Unauthorized Access:</strong> Attempting to gain unauthorized access to our digital systems or networks.</li>
        <li><strong>Infringement:</strong> Breaching intellectual property rights, such as copying and redistributing content without permission.</li>
        <li><strong>Cyber Security:</strong> Engaging in hacking, spamming, or other malicious activities.</li>
        <li><strong>Fraudulent Use:</strong> Any activity that misrepresents identity, intentions, or access credentials.</li>
    </ul>

    <h2>6. Charges and Shipping</h2>
    <p>
        Baquiveda may levy charges for certain services, including handling and shipping fees. Additional charges, such as international payment gateway fees or taxes, may also apply. 
        Detailed shipping and handling information can be found in our <a href="https://store.baquiveda.com/pages/faq">FAQ</a>.
    </p>

    <h2>7. Limitation of Liability</h2>
    <p>Baquiveda is not liable for:</p>
    <ul>
        <li><strong>Direct or Indirect Damages:</strong> Including lost profits, business interruptions, or loss of data, that may arise from using the digital assets.</li>
        <li><strong>Errors and Omissions:</strong> Baquiveda cannot be held responsible for errors, omissions, or inaccuracies in the provided information.</li>
    </ul>

    <h2>8. Indemnification</h2>
    <p>
        Users agree to indemnify and hold Baquiveda harmless from any claims, damages, or liabilities arising out of misuse of the digital assets, services, or content.
    </p>

    <h2>9. Governing Law</h2>
    <p>
        These Terms and Conditions are governed by Indian law, and any disputes will be subject to the jurisdiction of courts in Faridabad, Haryana.
    </p>

    <h2>10. Software</h2>
    <p>
        Any software made available for download through the digital assets is copyrighted by Baquiveda or its licensors. Use of such software is subject to any terms of the end-user license agreement provided with it.
    </p>

    <h2>11. Notices</h2>
    <p>
        Notices to users will be provided via electronic communication, including email or notices published on the digital assets. These notices are considered valid seven days after being posted.
    </p>

    <h2>12. Termination</h2>
    <p>
        Baquiveda reserves the right to terminate user access to its digital assets, at any time, without prior notice, for any reason.
    </p>

    <h2>13. User Contributions</h2>
    <p>
        By submitting content, including feedback and suggestions, you grant Baquiveda permission to use your submissions for business purposes. User identifiable data will not be sold or misused.
    </p>

    <h2>14. Information on Products and Services</h2>
    <p>
        The product and service information on the digital assets is for educational purposes and does not constitute advice to buy products. Any decisions to purchase must be based on user discretion.
    </p>

    <h2>15. Message Boards and Chat Rooms</h2>
    <p>
        Baquiveda offers message boards and chat rooms for discussions. Baquiveda is not liable for the content posted by users. We advise caution when transacting based on discussions within these forums.
    </p>

    <h2>16. Security Practices and Procedures</h2>
    <p>
        Baquiveda follows reasonable security practices to protect sensitive user information. Regular audits are conducted to ensure compliance with best practices.
    </p>

    <h2>17. Privacy Policy</h2>
    <p>
        Baquiveda is committed to protecting your privacy. Sensitive personal data will not be shared without user consent, except in compliance with legal obligations. You can review the <a href="https://www.baquiveda.com/privacy-policy">privacy policy</a> for more information.
    </p>
    <p><strong>Collection and Use of Personal Data:</strong></p>
    <ul>
        <li>Information such as name, email, phone number, and medical history is collected to personalize offers, improve services, and communicate with you.</li>
        <li>Users can review and correct their personal information at any time.</li>
        <li>Data is collected only for lawful purposes and is retained only for the necessary duration.</li>
    </ul>

    <h2>18. Cookies</h2>
    <p>
        Baquiveda uses cookies to track user behavior and improve the customer experience. Cookies help us save your preferences for future visits. Users can disable cookies, but this may affect the functionality of the digital assets.
    </p>

    <h2>19. Additional Terms</h2>
    <ul>
        <li>Users must disclose all relevant facts while using Baquiveda’s services.</li>
        <li>Consent for sharing medical information with healthcare providers may be required in certain cases.</li>
        <li>Users agree to receive communications from Baquiveda via email, phone, or SMS.</li>
    </ul>

    <h2>20. Campaign: Ghar Ghar Ayurveda</h2>
    <p>This promotional campaign is subject to the following terms:</p>
    <ul>
        <li><strong>Eligibility:</strong> Open to Indian nationals.</li>
        <li><strong>Consultation Offer:</strong> Available for ₹1 till the validity date.</li>
        <li><strong>Donation:</strong> Proceeds will be donated to an NGO.</li>
    </ul>
    </div>
  );
};

export default TermsAndConditions;