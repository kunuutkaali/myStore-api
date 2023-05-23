const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))