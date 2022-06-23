const { connectDb, DataTypes } = require('../utils/database.util');
// create of first model (table)
const Registration = connectDb.define('registration', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ingreso: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    egreso: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active',
    },
});

module.exports = { Registration };