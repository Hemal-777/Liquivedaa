const Appointment = require('../Models/Appointment'); // Assuming you have a model

const addAppointment = async (req, res) => {
  const { name, email, phone, date, time, message } = req.body;

  try {
    const newAppointment = new Appointment({
      name,
      email,
      phone,
      date,
      time,
      message
    });

    await newAppointment.save();
    return res.status(201).json({ message: 'Appointment created successfully', appointment: newAppointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({ message: 'Server error, could not create appointment' });
  }
};

module.exports = {
  addAppointment,
};
