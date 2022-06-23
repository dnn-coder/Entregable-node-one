const { Registration } = require('../models/registration.model');

const getAllRegistrations = async(req, res) => {
    try {
        const registrations = await Registration.findAll();
        res.status(200).json({
            status: 'success',
            registrations,
        });
    } catch (err) {
        console.log(err);
    }
};

const createRegistrations = async(req, res) => {
    try {
        const { name, ingreso, egreso, status } = req.body;

        const newRegistration = Registration.create({
            name,
            ingreso,
            egreso,
            status,
        });
        res.status(201).json({
            status: 'success',
            newRegistration,
        });
    } catch (err) {
        console.log();
    }
};

const getRegistrationById = async(req, res) => {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });
    if (!registration) {
        return res.status(404).json({
            status: 'error',
            message: 'Registration dont exist :(',
        });
    }
    res.status(201).json({
        status: 'succes',
        registration,
    });
};

const updateRegistration = async(req, res) => {
    const { id } = req.params;
    const { egreso } = req.body;

    const registration = await Registration.findOne({ where: { id } });
    if (!registration) {
        return res.status(404).json({
            status: 'error',
            message: 'Registration dont exist :(',
        });
    }

    await registration.update({ egreso });
    res.status(204).json({ status: 'success' });
};

const deleteRegistration = async(req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const registration = await Registration.findOne({ where: { id } });
    if (!registration) {
        return res.status(404).json({
            status: 'error',
            message: 'Registration dont exist :(',
        });
    }

    await registration.update({ status: 'deleted' });
    res.status(204).json({ status: 'success' });
};

module.exports = {
    getAllRegistrations,
    createRegistrations,
    getRegistrationById,
    updateRegistration,
    deleteRegistration,
};