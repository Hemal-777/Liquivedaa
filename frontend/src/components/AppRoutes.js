// AppRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DiseaseDetailPage from './DiseaseDetailPage';// Import the detailed disease page

const AppRoutes = () => {
  const jointPainDetails = [
    'OA', 'RA', 'KLP', 'LOP', 'Frozen Shoulder', 'Nerve Pain', 'Heel Pain', 'Sciatica'
  ];

  return (
    <Routes>
      {jointPainDetails.map((detail) => (
        <Route
          key={detail}
          path={`/disease/${detail.toLowerCase().replace(/\s+/g, '-')}`}
          element={<DiseaseDetailPage diseaseName={detail} />}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes;