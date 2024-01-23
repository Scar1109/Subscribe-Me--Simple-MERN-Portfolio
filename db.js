const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', true);

const mongoURL = 'mongodb+srv://Scar1109:Scar1234@cluster1109.gdgbtfl.mongodb.net/InnRooms'

mongoose.connect(mongoURL)

var connection = mongoose.connection

connection.on('error', ()=> {
    console.log('MongDB Connection Failed')
})

connection.on('connected' , ()=>{
    console.log('MongoDB Connection Successful')
})

module.exports  = mongoose

