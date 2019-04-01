const mongoose = require('mongoose');

const Schema = mongoose.Schema

const catSchema = new Schema({
    name: String,
    age: Number
});

mongoose
.connect('mongodb://localhost:27017/animals', { useNewUrlParser: true })
.then(() => {
    console.log('Database is online! and I am trying to config GitHub bas')
});

