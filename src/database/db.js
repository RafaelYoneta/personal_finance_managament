const mongoose =  require('mongoose')


connect= () => {
    mongoose.connect(process.env.MONGO_STRING_CONECCTION)

    const db = mongoose.connection

    db.once('open', () =>{console.log('connected to database')})
    
    db.once('error', () =>{console.log('error to connect to database')})

}

module.exports = {
    connect
}
  