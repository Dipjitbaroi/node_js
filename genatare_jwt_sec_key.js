const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};

const secretKey = generateSecretKey();
console.log('JWT Secret Key:', secretKey);