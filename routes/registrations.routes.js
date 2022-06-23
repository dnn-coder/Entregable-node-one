const express = require('express');

//controllers

const {
    getAllRegistrations,
    createRegistrations,
    getRegistrationById,
    updateRegistration,
    deleteRegistration,
} = require('../controllers/registrations.controler');

const { Registration } = require('../models/registration.model');

const registrationRouter = express.Router();

registrationRouter.get('/', getAllRegistrations);
registrationRouter.post('/', createRegistrations);
registrationRouter.get('/:id', getRegistrationById);
registrationRouter.patch('/:id', updateRegistration);
registrationRouter.delete('/:id', deleteRegistration);

module.exports = { registrationRouter };