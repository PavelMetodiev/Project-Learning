const mongoose = require('mongoose');

const Schema = mongoose.Schema

const catSchema = new Schema({
    name: { type: String, required: true },
    age: Number
});

const Cat = mongoose.model('Cat', catSchema);

mongoose
.connect('mongodb://localhost:27017/Animals', { useNewUrlParser: true })
.then(() => {
    console.log('Database is online!')

    Cat.find().then(cats => console.log(cats))
    // if left it like that every time I refresh it will create obj Molly again (1,2,3...)
    
    //  Cat
    //.create({
      //  name: 'Lilly',
        //age: 18
    //})
    //.then(cat => console.log(cat))
    
    //Cat
    //.create({
      //  age: 18
   // })
    //.then(cat => console.log(cat))
    //.catch(err => console.log(err))

    Cat
    .find()
    .then(cats => {
        for (let cat of cats) {
            console.log(cat.name)
        }
    })
});

