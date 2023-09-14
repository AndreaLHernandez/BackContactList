const express = require('express');
const app = express();

require('./database');

app.use(require('./routes/indexRoutes'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});