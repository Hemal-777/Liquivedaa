const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    //  Verify token and extract the user ID (or any payload you included in the token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user ID (or other payload data) to request object
    req.userId = decoded.userId;  // userId is whatever you put into the payload

    next();  // Proceed to the next middleware or the controller
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
