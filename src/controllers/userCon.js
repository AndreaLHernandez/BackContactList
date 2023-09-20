const models = require('../models');
//const {bcrypt} = require('bcrypt');

const getUsers = async (req, res) => {
    const getAllUsers = await models.User.find();
    return res.status(200).send({
        success: true,
        message: "Unauthorized user",
        users: getAllUsers,
    });
};

const addUser = async (req, res) => {
    try {
        const {name, password} = req.body;
        //Añadir encriptar pass
        //const encPass = bcrypt.hashSync(password)
        const newUser = new models.User({
            name,
            password,
        });
        await newUser.save();
        return res.status(200).send({
            success: true,
            message: "User created",
        });

    } catch (error) {
        console.log("Error create user:",error);
        return res.status(405).send(error);
        
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        await models.User.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "User deleted",
        });
    } catch (error) {
        return res.status(405).send({
            success: false,
            message: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, password} = req.body;
        const updateUser = await models.User.findByIdAndUpdate(id, {
            name,
            password,
        });
    return res.status(200).send({
        success: true,
        message: "User updated",
    });
    } catch (error) {
        return res.status(405).send({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getUsers,
    addUser,
    deleteUser,
    updateUser,
};