const app = require('./app');
const { createConnection } = require('./database');

createConnection();
app.listen(3000);
console.log('server on port', 3000);