const express = require('express');
const Server = express();
const {router} = require('./routes');
const {PORT} = require('./config/config');
const cors = require("cors");

require('./config/database');
Server.use(cors());
Server.use(express.json());
Server.use("/api",router);



Server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});