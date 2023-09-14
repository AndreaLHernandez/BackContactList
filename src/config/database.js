const {MONGO_DB} = require('./config');
const mongoose = require('mongoose');

mongoose.connect(MONGO_DB, {})
    .then(db => console.log('Data base is connected to', db.connection.host))
    .catch(err => console.error("Error conection:",err));