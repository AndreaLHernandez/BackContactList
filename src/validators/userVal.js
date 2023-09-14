const {check, validationResult} = require ('express-validator'); 


const validCreateUser = [
    check('name')
        .notEmpty()
        .withMessage('Name is required')
        .isLength({min: 3})
        .withMessage('Name must be at least 3 characters long'),
    
    check('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({min: 6})
        .withMessage('Password must be at least 6 characters long'), 
    
    
];

module.exports = validCreateUser;