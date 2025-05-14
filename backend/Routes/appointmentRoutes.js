// // routes/appointmentRoutes.js
// const express = require('express');
// const { createAppointment } = require('../Controllers/appointmentController');
// const router = express.Router();

// router.post('/appointments', createAppointment);

// module.exports = router;



// routes/appointmentRoutes.js
const express = require('express');
const { addAppointment } = require('../Controllers/appointmentController'); // Changed to addAppointment
const router = express.Router();

router.post('/appointments', addAppointment); // Ensure the path is correct

module.exports = router;
