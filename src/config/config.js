require('dotenv').config();

module.exports = {
    MONGO_DB: process.env.MONGO_DB,
    PORT: process.env.PORT || 3000,
};
