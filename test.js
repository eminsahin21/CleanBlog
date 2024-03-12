const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost/pcat-db')

const PhotoSchema = new Schema({
    title:String,
    desc:String
})

const Photo = mongoose.model('Photo', PhotoSchema);

// Photo.create({
//     title:'Bir Aksam Yemegi',
//     desc:'Sakiz'
// })



// async function db(){
//     const result = await Photo.find()
//     console.log(result)
// }

// db()

