const express = require('express');
const models = require('../models');

const getContacts = async (req, res) => {
    try {
      //Usuario valido 
        const {id} = req.query;
        const user = await models.User.findById(id);
        if(!user){
            return res.status(400).send({
                success: false,
                message: "User not found",
            });
        }else{
            const getAllContacts = await models.Contact.find(
                {user: id},
            );
            return res.status(200).send({
            success: true,
            message: "All contacts",
            data: getAllContacts,
            });
        }


      
    } catch (error) {
        return res.status(405).send({
            success: false,
            message: error.message,
        });
    }
};

const addContact = async (req, res) => {
    try {
        const {name, lastname, phone, email, user} = req.body;
        const {id} = req.query;
        const newContact = new models.Contact({
            name,
            lastname,
            phone,
            email,
            user: id,
        });
        await newContact.save();
        return res.status(200).send({
            success: true,
            message: "Contact created",
        });
    } catch (error) {
        return res.status(405).send({
            success: false,
            message: error.message,
        });
    }
};
const deleteContact = async (req, res) => {
    try {
        const {id} = req.params;
        await models.Contact.findByIdAndDelete(id)
        return res.status(200).send({
            success: true,
            message: "Contact deleted",
        });
    } catch (error) {
        return res.status(405).send({
            success: false,
            message: error.message,
        });
    }
};

const updateContact = async (req, res) => {
    try {
        const {id} = req.params;
        const {name, lastname, phone, email} = req.body;
        const updateContact = await models.Contact.findByIdAndUpdate(id, {
            name,
            lastname,
            phone,
            email,
        });
    return res.status(200).send({
        success: true,
        message: "Contact updated",
    });
    } catch (error) {
        return res.status(405).send({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    getContacts,
    addContact,
    deleteContact,
    updateContact,
};