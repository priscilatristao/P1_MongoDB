const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://prilimarj:12345678#@cluster0.ylej0qf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', 
{ useNewUrlParser: true, useUnifiedTopology: true });

const express = require('express');
const routes = require('./src/routes/routes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});