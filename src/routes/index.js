const {contactCon, userCon} = require('../controllers');
const {validCreateUser, validContac} = require('../validators');
const {Router} = require('express');
const router = Router();

router
    .route('/contacts')
    .get(contactCon.getContacts)
    .post(contactCon.addContact);

router
    .route('/contacts/:id')
    .put(contactCon.updateContact)
    .delete(contactCon.deleteContact);

router
    .route('/users')
    .get(userCon.getUsers)
    .post(validCreateUser, userCon.addUser);

router
    .route('/users/:id')
    .put(userCon.updateUser)
    .delete(userCon.deleteUser);

module.exports = {router};