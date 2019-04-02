const mongoose = require('mongoose');

const Schema = mongoose.Schema

const catSchema = new Schema({
    name: { type: String, required: true, },
    age: Number
});

mongoose
.connect('mongodb://localhost:27017/animals', { useNewUrlParser: true })
.then(() => {
    console.log('Database is online!')
});

