require('dotenv').config();

const server = require('./api/server.js');

// const port = process.env.DB_ENV === 'testing' ? 4000 : 5000;

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));
