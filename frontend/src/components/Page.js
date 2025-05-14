// // import React, { useState } from "react";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faChevronDown, faChevronUp, faDisease } from '@fortawesome/free-solid-svg-icons';
// // import './page.css'; // Import CSS file for styling

// // const MainDiseases = () => {
// //   const diseases = [
// //     { name: 'Joint Pain', details: ['OA', 'RA', 'KLP', 'LOP', 'Frozen Shoulder', 'Nerve Pain', 'Heel Pain', 'Sciatica'] },
// //     { name: 'Digestive Disease', details: ['Gastric Acidity', 'IBS', 'Constipation'] },
// //     { name: 'Neurological', details: ['Migraine'] },
// //     { name: 'Endocrinal Disorders', details: ['Diabetes Type 2', 'Thyroid (Hypothyroidism)'] },
// //     { name: 'Anorectal Problems', details: ['Piles', 'Fissures', 'Fistula'] },
// //     { name: 'Female Problems', details: ['Dysmenorrhea', 'Irregular Menses', 'Excess Bleeding', 'PCOS', 'PCOD'] },
// //     { name: 'Skin Problems', details: ['Acne', 'Pimples', 'Eczema', 'Psoriasis', 'Skin Allergy', 'White Patch'] },
// //     { name: 'Sexual Problems', details: ['SP', 'NF', 'LSD', 'ED', 'PE', 'Infertility < M > < F >', 'Sexual Debility'] },
// //     { name: 'Mental', details: ['Anxiety'] },
// //     { name: 'Hairfall', details: ['Dandruff', 'Alopecia'] },
// //     { name: 'Metabolic Disease', details: ['Obesity', 'High Blood Pressure', 'Hyperlipidemia'] },
// //     { name: 'Respiratory Problems', details: ['Cough & Cold', 'Sinusitis', 'COPD', 'Asthma'] },
// //   ];

// //   // State to toggle dropdowns
// //   const [openDisease, setOpenDisease] = useState(null);

// //   const toggleDisease = (index) => {
// //     if (openDisease === index) {
// //       setOpenDisease(null);
// //     } else {
// //       setOpenDisease(index);
// //     }
// //   };

// //   return (
// //     <div className="disease-container">
// //       {diseases.map((disease, index) => (
// //         <div key={index} className="disease-item">
// //           <div className="disease-header" onClick={() => toggleDisease(index)}>
// //             <FontAwesomeIcon icon={faDisease} className="disease-icon" />
// //             <span>{disease.name}</span>
// //             <FontAwesomeIcon icon={openDisease === index ? faChevronUp : faChevronDown} className="toggle-icon" />
// //           </div>
// //           {openDisease === index && (
// //             <div className="disease-details">
// //               <ul>
// //                 {disease.details.map((detail, i) => (
// //                   <li key={i}>{detail}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MainDiseases;


// // import React, { useState } from "react";
// // import { Route, Routes, Link } from "react-router-dom";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faChevronDown, faChevronUp, faDisease } from '@fortawesome/free-solid-svg-icons';
// // import './page.css';

// // const MainDiseases = () => {
// //   const diseases = [
// //     { name: 'Joint Pain', details: ['OA', 'RA', 'KLP', 'LOP', 'Frozen Shoulder', 'Nerve Pain', 'Heel Pain', 'Sciatica'] },
// //     { name: 'Digestive Disease', details: ['Gastric Acidity', 'IBS', 'Constipation'] },
// //     { name: 'Neurological', details: ['Migraine'] },
// //     { name: 'Endocrinal Disorders', details: ['Diabetes Type 2', 'Thyroid (Hypothyroidism)'] },
// //     { name: 'Anorectal Problems', details: ['Piles', 'Fissures', 'Fistula'] },
// //     { name: 'Female Problems', details: ['Dysmenorrhea', 'Irregular Menses', 'Excess Bleeding', 'PCOS', 'PCOD'] },
// //     { name: 'Skin Problems', details: ['Acne', 'Pimples', 'Eczema', 'Psoriasis', 'Skin Allergy', 'White Patch'] },
// //     { name: 'Sexual Problems', details: ['SP', 'NF', 'LSD', 'ED', 'PE', 'Infertility'] },
// //     { name: 'Mental', details: ['Anxiety'] },
// //     { name: 'Hairfall', details: ['Dandruff', 'Alopecia'] },
// //     { name: 'Metabolic Disease', details: ['Obesity', 'High Blood Pressure', 'Hyperlipidemia'] },
// //     { name: 'Respiratory Problems', details: ['Cough & Cold', 'Sinusitis', 'COPD', 'Asthma'] },
// //   ];

// //   const [openDisease, setOpenDisease] = useState(null);

// //   const toggleDisease = (index) => {
// //     if (openDisease === index) {
// //       setOpenDisease(null); // Close if clicked again
// //     } else {
// //       setOpenDisease(index); // Open this disease
// //     }
// //   };

// //   return (
// //     <div className="disease-container">
// //       {diseases.map((disease, index) => (
// //         <div
// //           key={index}
// //           className={`disease-item ${openDisease === index ? 'open' : ''}`}
// //           onClick={() => toggleDisease(index)}
// //         >
// //           <div className="disease-header">
// //             <FontAwesomeIcon icon={faDisease} className="disease-icon" />
// //             <span>{disease.name}</span>
// //             <FontAwesomeIcon icon={openDisease === index ? faChevronUp : faChevronDown} className="toggle-icon" />
// //           </div>
// //           <div className="disease-details">
// //             <ul>
// //               {disease.details.map((detail, i) => (
// //                 <li key={i}>
// //                   {/* Generate the correct link dynamically */}
// //                   <Link to={`/disease/${detail.toLowerCase().replace(/\s+/g, '-')}`}>{detail}</Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // const DiseaseDetailPage = ({ diseaseName }) => {
// //   return (
// //     <div>
// //       <h1>{diseaseName}</h1>
// //       <p>Details about {diseaseName} will go here...</p>
// //     </div>
// //   );
// // };

// // // Routes Component to include in your main App
// // const AppRoutes = () => {
// //   const diseases = [
// //     { name: 'Joint Pain', details: ['OA', 'RA', 'KLP', 'LOP', 'Frozen Shoulder', 'Nerve Pain', 'Heel Pain', 'Sciatica'] },
// //     { name: 'Digestive Disease', details: ['Gastric Acidity', 'IBS', 'Constipation'] },
// //     // Add other diseases as per the array above...
// //   ];

// //   return (
// //     <Routes>
// //       {diseases.map((disease) =>
// //         disease.details.map((detail) => (
// //           <Route
// //             key={detail}
// //             path={`/disease/${detail.toLowerCase().replace(/\s+/g, '-')}`}
// //             element={<DiseaseDetailPage diseaseName={detail} />}
// //           />
// //         ))
// //       )}
// //     </Routes>
// //   );
// // };

// // export { MainDiseases, AppRoutes };

// import React, { useState } from "react";
// import { Route, Routes, Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp, faDisease } from '@fortawesome/free-solid-svg-icons';
// import './page.css';

// const MainDiseases = () => {
//   const diseases = [
//         { name: 'Joint Pain', details: ['OA', 'RA', 'KLP', 'LOP', 'Frozen Shoulder', 'Nerve Pain', 'Heel Pain', 'Sciatica'] },
        // { name: 'Digestive Disease', details: ['Gastric Acidity', 'IBS', 'Constipation'] },
        // { name: 'Neurological', details: ['Migraine'] },
        // { name: 'Endocrinal Disorders', details: ['Diabetes Type 2', 'Thyroid (Hypothyroidism)'] },
        // { name: 'Anorectal Problems', details: ['Piles', 'Fissures', 'Fistula'] },
        // { name: 'Female Problems', details: ['Dysmenorrhea', 'Irregular Menses', 'Excess Bleeding', 'PCOS', 'PCOD'] },
        // { name: 'Skin Problems', details: ['Acne', 'Pimples', 'Eczema', 'Psoriasis', 'Skin Allergy', 'White Patch'] },
        // { name: 'Sexual Problems', details: ['SP', 'NF', 'LSD', 'ED', 'PE', 'Infertility'] },
        // { name: 'Mental', details: ['Anxiety'] },
        // { name: 'Hairfall', details: ['Dandruff', 'Alopecia'] },
        // { name: 'Metabolic Disease', details: ['Obesity', 'High Blood Pressure', 'Hyperlipidemia'] },
        // { name: 'Respiratory Problems', details: ['Cough & Cold', 'Sinusitis', 'COPD', 'Asthma'] },
//       ];

//   const [openDisease, setOpenDisease] = useState(null);

//   const toggleDisease = (index) => {
//     if (openDisease === index) {
//       setOpenDisease(null); // Close if clicked again
//     } else {
//       setOpenDisease(index); // Open this disease
//     }
//   };

//   return (
//     <div className="disease-container">
//       {diseases.map((disease, index) => (
//         <div
//           key={index}
//           className={`disease-item ${openDisease === index ? 'open' : ''}`}
//           onClick={() => toggleDisease(index)}
//         >
//           <div className="disease-header">
//             <FontAwesomeIcon icon={faDisease} className="disease-icon" />
//             <span>{disease.name}</span>
//             <FontAwesomeIcon icon={openDisease === index ? faChevronUp : faChevronDown} className="toggle-icon" />
//           </div>
//           <div className="disease-details">
//             <ul>
//               {disease.details.map((detail, i) => (
//                 <li key={i}>
//                   <Link to={`/disease/joint-pain/${detail.toLowerCase().replace(/\s+/g, '-')}`}>{detail}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const DiseaseDetailPage = ({ diseaseName, description, ayurvedaSolution, unaniSolution }) => {
//   return (
//     <div className="disease-detail-page">
//       <h1>{diseaseName}</h1>
//       <p>{description}</p>
//       <h2>Ayurvedic Treatment</h2>
//       <p>{ayurvedaSolution}</p>
//       <h2>Unani Treatment</h2>
//       <p>{unaniSolution}</p>
//     </div>
//   );
// };

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* Joint Pain Pages */}
//       <Route
//         path="/disease/joint-pain/oa"
//         element ={
//           <DiseaseDetailPage
//             diseaseName="Osteoarthritis (OA)"
//             description="Osteoarthritis is a condition where the protective cartilage that cushions the ends of the bones wears down over time."
//             ayurvedaSolution="Ayurvedic treatments include Panchakarma therapy, use of herbal oils like Mahanarayana oil for massage, and consuming Guggul (Commiphora wightii) to reduce inflammation."
//             unaniSolution="Unani medicine recommends the use of Roghan Banafsha (Viola odorata oil) for local application, as well as oral use of Majoon Suranjan for relieving pain and inflammation."
//           />
//         }
//       />
//       <Route
//         path="/disease/joint-pain/ra"
//         element={
//           <DiseaseDetailPage
//             diseaseName="Rheumatoid Arthritis (RA)"
//             description="Rheumatoid arthritis is an autoimmune disorder where the immune system mistakenly attacks the joints."
//             ayurvedaSolution="Ayurvedic treatments for RA include Shodhana (purification) therapies like Virechana and the use of anti-inflammatory herbs such as Ashwagandha and Boswellia."
//             unaniSolution="Unani treatment involves the use of Habb-e-Suranjan and Roghan Suranjan to ease joint inflammation and swelling, coupled with detoxifying the body using Unani tonics."
//           />
//         }
//       />
//       <Route
//         path="/disease/joint-pain/klp"
//         element={
//           <DiseaseDetailPage
//             diseaseName="Knee Ligament Pain (KLP)"
//             description="Knee ligament pain is often caused by tears in the ligaments, such as the ACL or MCL."
//             ayurvedaSolution="Treatment includes Abhyanga (oil massage), especially with Bala and Ashwagandha oils, along with internal use of herbs like Rasna and Guduchi."
//             unaniSolution="In Unani medicine, local application of Roghan-e-Kafoor (camphor oil) is advised along with consuming Arq-e-Gulab to relieve inflammation."
//           />
//         }
//       />
//       <Route
//         path="/disease/joint-pain/lop"
//         element={
//           <DiseaseDetailPage
//             diseaseName="Lower Back Pain (LOP)"
//             description="Lower back pain can arise from muscle strain, ligament sprains, or spinal issues."
//             ayurvedaSolution="Ayurveda recommends Kati Basti therapy (medicated oil treatment) along with oral intake of Dashamoola for reducing pain and inflammation."
//             unaniSolution="Unani treatment includes Hijama (cupping therapy) and application of Unnab (jujube) paste on the affected area for relief."
//           />
//         }
//       />
//       <Route
//         path="/disease/joint-pain/frozen-shoulder"
//         element={
//           <DiseaseDetailPage
//             diseaseName="Frozen Shoulder"
//             description="Frozen shoulder is characterized by stiffness and pain in the shoulder joint."
//             ayurvedaSolution="Ayurvedic treatment involves external therapies like Pizhichil (oil bath) and internal consumption of herbs like Guggulu and Shallaki."
//             unaniSolution="Unani suggests application of Roghan-e-Zaitoon (olive oil) for massage, along with oral use of Majoon-e-Suranjan for joint lubrication."
//           />
//         }
//       />
//       <Route
//         path="/disease/joint-pain/nerve-pain"
//         element={
//           <DiseaseDetailPage
//             diseaseName="Nerve Pain"
//             description="Nerve pain, or neuropathy, often results from nerve damage or compression."
//             ayurvedaSolution="Ayurvedic treatments like Nasya therapy (nasal administration) and the use of herbal decoctions like Ashwagandha and Shatavari help in nerve rejuvenation."
//             unaniSolution="In Unani, Roghan-e-Suranjan is recommended for massage and Unani tonics like Dawa-ul-Misk to strengthen the nervous system."
//           />
//         }
//       />
//       <Route
//         path="/disease/joint-pain/heel-pain"
//         element={
//           <DiseaseDetailPage
//             diseaseName="Heel Pain"
//             description="Heel pain is often caused by plantar fasciitis, a condition where the tissue connecting the heel bone to the toes becomes inflamed."
//             ayurvedaSolution="Ayurveda suggests regular foot massage with Ksheerabala oil and soaking feet in warm water infused with Epsom salts to reduce inflammation."
//             unaniSolution="Unani treatment involves local application of Roghan-e-Banafsha and oral use of Unani medicines like Habbe Suranjan for pain relief."
//           />
//         }
//       />
//       <Route
//         path="/disease/joint-pain/sciatica"
//         element={
//           <DiseaseDetailPage
//             diseaseName="Sciatica"
//             description="Sciatica refers to pain that radiates along the path of the sciatic nerve, usually affecting one side of the body."
//             ayurvedaSolution="Ayurvedic treatments like Kati Vasti (warm oil therapy) and herbal supplements like Eranda and Rasna are effective for sciatic pain."
//             unaniSolution="Unani medicine suggests using Roghan-e-Suranjan for external application and herbal concoctions like Arq-e-Gulab for pain management."
//           />
//         }
//       />
//       {/* Other disease routes */}
//     </Routes>
//   );
// };

// export { MainDiseases, AppRoutes };




// MainDiseases.js
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp, faDisease } from '@fortawesome/free-solid-svg-icons';
// import './page.css';

// const MainDiseases = () => {
//   const diseases = [
//     { name: 'Joint Pain', details: ['OA', 'RA', 'KLP', 'LOP', 'Frozen Shoulder', 'Nerve Pain', 'Heel Pain', 'Sciatica'] },
//        { name: 'Digestive Disease', details: ['Gastric Acidity', 'IBS', 'Constipation'] },
//         { name: 'Neurological', details: ['Migraine'] },
//         { name: 'Endocrinal Disorders', details: ['Diabetes Type 2', 'Thyroid (Hypothyroidism)'] },
//         { name: 'Anorectal Problems', details: ['Piles', 'Fissures', 'Fistula'] },
//         { name: 'Female Problems', details: ['Dysmenorrhea', 'Irregular Menses', 'Excess Bleeding', 'PCOS', 'PCOD'] },
//         { name: 'Skin Problems', details: ['Acne', 'Pimples', 'Eczema', 'Psoriasis', 'Skin Allergy', 'White Patch'] },
//         { name: 'Sexual Problems', details: ['SP', 'NF', 'LSD', 'ED', 'PE', 'Infertility'] },
//         { name: 'Mental', details: ['Anxiety'] },
//         { name: 'Hairfall', details: ['Dandruff', 'Alopecia'] },
//         { name: 'Metabolic Disease', details: ['Obesity', 'High Blood Pressure', 'Hyperlipidemia'] },
//         { name: 'Respiratory Problems', details: ['Cough & Cold', 'Sinusitis', 'COPD', 'Asthma'] },
//     // ... other diseases
//   ];

//   const [openDisease, setOpenDisease] = useState(null);

//   const toggleDisease = (index) => {
//     if (openDisease === index) {
//       setOpenDisease(null); // Close if clicked again
//     } else {
//       setOpenDisease(index); // Open this diseases
//     }
//   };

//   return (

//     <div className="disease-container">
//       {diseases.map((disease, index) => (
//         <div
//           key={index}
//           className={`disease-item ${openDisease === index ? 'open' : ''}`}
//           onClick={() => toggleDisease(index)}
//         >
//           <div className="disease-header">
//             <FontAwesomeIcon icon={faDisease} className="disease-icon" />
//             <span>{disease.name}</span>
//             <FontAwesomeIcon icon={openDisease === index ? faChevronUp : faChevronDown} className="toggle-icon" />
//           </div>
//           <div className="disease-details">
//             <ul>
//               {disease.details.map((detail, i) => (
//                 <li key={i}>
//                   {/* Update the link for the OA disease */}
//                   {detail === 'OA' ? (
//                     <Link to="/disease/oa">{detail}</Link>
//                   ) : (
//                     <Link to={`/disease/${detail.toLowerCase().replace(/\s+/g, '-')}`}>{detail}</Link>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>

//   );
// };

// export default MainDiseases;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faDisease } from '@fortawesome/free-solid-svg-icons';
import './page.css';


const toTitleCase = (text) =>
  text
    .toLowerCase()
    .split(/[\s-]+/) // Split by spaces or hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const MainDiseases = () => {
  const diseases = [
    {
      name: 'Joint Pain',
      details: [
        { short: 'Osteoarthritis', full: 'Osteoarthritis' },
        { short: 'Rheumatoid Arthritis', full: 'Rheumatoid Arthritis' },
        { short: 'Knee Pain', full: 'Knee Pain' },
        { short: 'Frozen Shoulder', full: 'Frozen Shoulder' },
        { short: 'Nerve Pain', full: 'Nerve Pain' },
        { short: 'Neck Pain', full: 'Neck Pain' },
        { short: 'Heel Pain', full: 'Heel Pain' },
        { short: 'Sciatica', full: 'Sciatica' },
        { short: 'low back pain', full : 'Low Back Pain'}
      ]
    },
    {
      name: 'Digestive Disease',
      details: [
        { short: 'Excess Gas Formation', full: 'Excess Gas Formation' },
        { short: 'Hyperacidity', full: 'Hyperacidity'},
        { short: 'IBS', full: 'Irritable Bowel Syndrome' },
        { short: 'Constipation', full: 'Constipation' }
      ]
    },
    {
      name: 'Neurological',
      details: [{ short: 'Migraine', full: 'Migraine' }]
    },
    {
      name: 'Endocrinal Disorders',
      details: [
        { short: 'Diabetes Type 2', full: 'Diabetes Type 2' },
        { short: 'Hypothyroidism', full: 'Hypothyroidism' }
      ]
    },
    {
      name: 'Anorectal Problems',
      details: [
        { short: 'Piles', full: 'Piles' },
        { short: 'Fissure', full: 'Fissure' },
        { short: 'Fistula', full: 'Fistula' }
      ]
    },
    {
      name: 'Female Problems',
      details: [
        { short: 'Dysmenorrhea', full: 'Dysmenorrhea' },
        {short : 'Leucorrhoea', full : 'Leucorrhoea'},
        { short: 'Irregular Menses', full: 'Irregular Menses' },
        { short: 'Excess Bleeding', full: 'Excess Bleeding' },
        { short: 'PCOS', full: 'Polycystic Ovarian Syndrome' },
        { short: 'PCOD', full: 'Polycystic Ovarian Disease' }
      ]
    },
    {
      name: 'Skin Problems',
      details: [
        { short: 'Acne', full: 'Acne' },
        { short: 'Pimples', full: 'Pimples' },
        { short: 'Eczema', full: 'Eczema' },
        { short: 'Psoriasis', full: 'Psoriasis' },
        { short: 'Skin Allergy', full: 'Skin Allergy' },
        { short: 'White Patch', full: 'White Patch' }
      ]
    },
    {
      name: 'Sexual Problems',
      details: [
        { short: 'Spermatorrhoea', full: 'Spermatorrhoea' },
        { short: 'Nocturnal Emission', full: 'Nocturnal Emission' },
        { short: 'Low Sex Drive', full: 'Low Sex Drive' },
        { short: 'Erectile Dysfunction', full: 'Erectile Dysfunction' },
        { short: 'Premature Ejaculation', full: 'Premature Ejaculation' },
        { short: 'Infertility', full: 'Infertility' }
      ]
    },
    {
      name: 'Mental',
      details: [{ short: 'Anxiety', full: 'Anxiety' }]
    },
    {
      name: 'Hair problems',
      details: [
        { short: 'Hair Fall', full: 'Hair Fall' },
        { short: 'Dandruff', full: 'Dandruff' },
        { short: 'Alopecia', full: 'Alopecia' }
      ]
    },
    {
      name: 'Metabolic Disease',
      details: [
        { short: 'Obesity', full: 'Obesity' },
        { short: 'High Blood Pressure', full: 'High Blood Pressure' },
        { short: 'Hyperlipidemia', full: 'Hyperlipidemia' }
      ]
    },
    {
      name: 'Respiratory Problems',
      details: [
        { short: 'cough and cold', full: 'Cough And Cold' },
        { short: 'Sinusitis', full: 'Sinusitis' },
        { short: 'COPD', full: 'Chronic Obstructive Pulmonary Disease' },
        { short: 'Asthma', full: 'Asthma' }
      ]
    }
  ];

//   const [openDisease, setOpenDisease] = useState(null);

//   const toggleDisease = (index) => {
//     setOpenDisease(openDisease === index ? null : index); // Toggle between open and closed
//   };

//   return (
//     <div className="disease-container">
//       {diseases.map((disease, index) => (
//         <div
//           key={index}
//           className={`disease-item ${openDisease === index ? 'open' : ''}`}
//           onClick={() => toggleDisease(index)}
//         >
//           <div className="disease-header">
//             <FontAwesomeIcon icon={faDisease} className="disease-icon" />
//             <span>{disease.name}</span>
//             <FontAwesomeIcon
//               icon={openDisease === index ? faChevronUp : faChevronDown}
//               className="toggle-icon"
//             />
//           </div>
//           {openDisease === index && (
//             <div className="disease-details">
//             <ul>
//               {disease.details.map((detail, i) => (
//                 <li key={i}>
//                   {/* Display the full name but link with the short name */}
//                   <Link
//                     to={`/disease/${detail.short.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-')}`}
//                   >
//                     {detail.full}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };



const [openDisease, setOpenDisease] = useState(null);

  const toggleDisease = (index) => {
    setOpenDisease(openDisease === index ? null : index); // Toggle between open and closed
  };

  return (
    <div className="disease-container">
      {diseases.map((disease, index) => (
        <div
          key={index}
          className={`disease-item ${openDisease === index ? 'open' : ''}`}
          onClick={() => toggleDisease(index)}
        >
          <div className="disease-header">
            <FontAwesomeIcon icon={faDisease} className="disease-icon" />
            {/* Use the toTitleCase function for proper capitalization */}
            <span>{toTitleCase(disease.name)}</span>
            <FontAwesomeIcon
              icon={openDisease === index ? faChevronUp : faChevronDown}
              className="toggle-icon"
            />
          </div>
          {openDisease === index && (
            <div className="disease-details">
              <ul>
                {disease.details.map((detail, i) => (
                  <li key={i}>
                    <Link
                      to={`/disease/${detail.short.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-')}`}
                    >
                      {detail.full}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainDiseases;