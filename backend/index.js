// const express = require('express');
// const cors = require('cors');
// const AuthRouter = require('./Routes/AuthRouter');
// const ProductRouter = require('./Routes/ProductRouter');
// const cartRoutes = require('./Routes/CartRouter'); // Ensure correct path
// require('dotenv').config();
// require('./Models/db'); // Ensure this connects to your MongoDB
// const wishlistRoutes = require('./Routes/wishlistRoutes'); // Adjust the path as necessary
// const appointmentRoutes = require('./Routes/appointmentRoutes');

// // Add this line to use the contact routes



// const app = express();

// // Middleware
// app.use(express.json()); // Built-in body parser
// app.use(cors());

// // Define routes
// app.use('/auth', AuthRouter);
// app.use('/products', ProductRouter);
// app.use('/cart', cartRoutes); // Ensure this route is correctly set up in CartRouter
// app.use('/wishlist', wishlistRoutes); 
// app.use('/appointment', appointmentRoutes);

// // Health check endpoint
// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

// app.use(cors({
//     origin: 'https://baquiveda-frontend.vercel.app', // allow your frontend domain
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // allowed methods
//     credentials: true // if you need to include cookies or authorization headers
// }));

// // Catch all undefined routes (404 Not Found)
// app.use((req, res, next) => {
//     res.status(404).json({ message: 'Endpoint not found' });
// });

// // Global error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack); // Log the error stack
//     res.status(500).json({ message: 'Something went wrong', error: err.message });
// });

// // Start server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });





const express = require('express');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const cartRoutes = require('./Routes/CartRouter'); // Ensure correct path
require('dotenv').config();
require('./Models/db'); // Ensure this connects to your MongoDB
const wishlistRoutes = require('./Routes/wishlistRoutes'); // Adjust the path as necessary
const appointmentRoutes = require('./Routes/appointmentRoutes');

const app = express();

// CORS configuration
const corsOptions = {
    origin: '*', // Allow your frontend domain
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'], // Allowed methods
    credentials: true, // Include cookies and authorization headers
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS middleware
app.use(express.json()); // Built-in body parser

// Define routes
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/cart', cartRoutes); // Ensure this route is correctly set up in CartRouter
app.use('/wishlist', wishlistRoutes);
app.use('/appointment', appointmentRoutes);

// Health check endpoint
app.get('/ping', (req, res) => {
    res.send('PONG');
});

// Handle preflight requests
app.options('*', cors(corsOptions)); // Preflight request handling

// Catch all undefined routes (404 Not Found)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ message: 'Something went wrong', error: err.message });
});
// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




