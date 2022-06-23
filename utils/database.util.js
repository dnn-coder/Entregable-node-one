const { Sequelize, DataTypes } = require('sequelize');
//connect to database
const connectDb = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '123456',
    port: 5432,
    database: 'registrations',
    logging: false,
});

module.exports = { connectDb, DataTypes };