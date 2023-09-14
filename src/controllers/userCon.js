const models = require('../models');
//const {bcrypt} = require('bcrypt');

const getUsers = async (req, res) => {
    const getAllUsers = await models.User.find();
    return res.status(200).send(
        getAllUsers,
    );
};

const addUser = async (req, res) => {
    try {
        const {body} = req.body;
        //Añadir encriptar pass
        //const encPass = bcrypt.hashSync(body.password)
        const newUser = new models({
            name: body.name,
            password: body.password,
        });
        await newUser.save();
        return res.status(200).send("User created");

    } catch (error) {
        return res.status(500).send("Error creating user", error);
        
    }
};


module.exports = {
    getUsers,
    addUser,
};