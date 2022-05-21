const mongoose = require('mongoose')
const user = require('./models/users')

// connecting to mongo
mongoose.connect('mongodb://localhost:27017/FASTwitter')
    .then( () => console.log(' connection to MONGODB successful!'))
    .catch( err => {
        console.log('connection refused')
        console.log(err)})

// creating test user
const user1 = new user({name:'Saad',email:'HEHE@pomd.com',pwd:'abc'})
// const user2 = new user({name:'Berry',email:'HEHE@pomd.com',pwd:'abc'})

user1.save().then( user1 => {
    console.log(user1)
})
.catch(e => {
    console.log("ERROR!")
    console.log(e)
})  