const express = require('express');
const models = require('../models');

const getContacts = async (req, res) => {
    try {
      //Añadir chequeo de usuario  
      const getAllContacts = await models.Contacts.findAll();
      return res.status(200).send(
        getAllContacts,
        );
    } catch (error) {
        return res.status(500).send("Error getting contacts", error);
    }
};

const addContact = async (req, res) => {
    try {
        const {name, lastname, phone, email, user} = req.body;
    } catch (error) {
        
    }
};

module.exports = {
    getContacts,
    addContact,
};