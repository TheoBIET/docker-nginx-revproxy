
const api_base = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '/api';
module.exports = api_base;