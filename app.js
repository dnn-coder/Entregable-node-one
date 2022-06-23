const express = require('express');

//Routes
const { registrationRouter } = require('./routes/registrations.routes');
const { connectDb } = require('./utils/database.util');
//inicializar express app
const app = express();

app.use(express.json());

//define endpoints
app.use('/registrations', registrationRouter);

connectDb
    .authenticate()
    .then(() => console.log('database authenticated'))
    .catch(err => console.log(err));

connectDb
    .sync()
    .then(() => console.log('database synced'))
    .catch(err => console.log(err));

app.listen(4200, () => {
    console.log('Check-in app is running...');
});