
// const jwt = require('jsonwebtoken');
// const ensureAuthenticated = (req, res, next) => {
//     const auth = req.headers['authorization'];
//     if (!auth) {
//         return res.status(403)
//             .json({ message: 'Unauthorized, JWT token is require' });
//     }
//     const token = auth.split(' ')[1];
//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (err) {
//         return res.status(403)
//             .json({ message: 'Unauthorized, JWT token wrong or expired' });
//     }
// }

// module.exports = ensureAuthenticated;


// middleware/ensureAuthenticated.js
const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth) {
    return res.status(403).json({ message: 'Unauthorized, JWT token is required' });
  }

  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Assign the decoded token data to req.user
    next(); // Allow the request to proceed
  } catch (err) {
    return res.status(403).json({ message: 'Unauthorized, JWT token wrong or expired' });
  }
};

module.exports = ensureAuthenticated;
