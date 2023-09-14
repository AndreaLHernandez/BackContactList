const {check} = require ('express-validator');
const validContact = [
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({min: 3})
        .withMessage('Name must be at least 3 characters long'),
    
    check('lastname')
        .matches(/^[a-zA-Z]+$/)
        .withMessage('Lastname must be only letters'),
    
    check('phone')
        .isNumeric()
        .withMessage('Phone must be only numbers')
        .isLength({min: 10})
        .withMessage('Phone must be at least 10 characters long'),

    check('email')
        .isEmail()
        .withMessage('Email must be a valid email address'),
];

module.exports = validContact;