const express = require('express');
const Server = express();
const {router} = require('./routes');

require('./config/database');

Server.use("/api",router);


Server.listen(3000, () => {
    console.log('Server is running on port 3000');
});