
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/Posts', { uslNewUrlParser : true})
const Schema=mongoose.Schema

let postSchema= new Schema({

    postId: Number,
    userIdkey: String,
    text: String,
    socialNetwork: []

})

const Post = mongoose.model(`posts`, postSchema)

module.exports= Post



