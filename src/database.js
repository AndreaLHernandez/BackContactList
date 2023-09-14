const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/express-mongo')
    .then(db => console.log('DB is connected', db.connection.host))
    .catch(err => console.error("Error conection:",err));