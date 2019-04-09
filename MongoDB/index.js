const mongoose = require('mongoose');

const Schema = mongoose.Schema


/* const catSchema = new Schema({
    name: { type: String, required: true },
    age: Number
});

const Cat = mongoose.model('Cat', catSchema);

mongoose
.connect('mongodb://localhost:27017/Animals', { useNewUrlParser: true })
.then(() => {
    console.log('Database is online!')

    Cat.find().then(cats => console.log(cats))
    // if left it like that every time I refresh it will create obj Lilly again (1,2,3...)
    
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
    //.deleteMany({name: 'Molly'})
    //.deleteOne({name: 'Molly'})
    .find()
    // .findOne({name: 'Molly'}) // finds the first Obj with this req
    //.where('age').gt(10)
    // .findByIdAndUpdate("5ca3710381f7a63220b5e7f8", {age: 43})
    //.sort('-age') // sort in opposite direction from bigger to smeller
    // .select('')
    //. findById('')
    
    .then(cats => {
        for (let cat of cats) {
            console.log(cat.age)
        }
    })
}); */

const studentSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    averageGrade: Number
})

