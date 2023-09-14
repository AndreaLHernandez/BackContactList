const {contactCon, userCon} = require('../controllers');
const {validCreateUser, validContac} = require('../validators');
const {Router} = require('express');
const router = Router();

router
    .route('/contacts')
    .get(contactCon.getContacts)
    .post(contactCon.addContact);

router
    .route('/users')
    .get(userCon.getUsers)
    .post(validCreateUser, userCon.addUser);

module.exports = {router};