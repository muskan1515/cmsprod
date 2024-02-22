const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY; // Change this to a secure secret key

// Function to create a token from leadId and type
const createToken = (leadId, type) => {
  const payload = {
    leadId,
    type,
  };

  // Sign the token with the secret key
  const token = jwt.sign(payload, secretKey); // Adjust the expiration time as needed

  return token;
};

module.exports = createToken;
