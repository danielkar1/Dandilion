
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/Posts', { uslNewUrlParser : true})
const Schema=mongoose.Schema

let postSchema= new Schema({
 
    userIdkey: String,
    text: String,
    img: String,
    date: String,
    socialNetwork: []

})

const Post = mongoose.model(`posts`, postSchema)

module.exports= Post



