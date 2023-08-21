const mongoose = require('mongoose')

const MongoDB_Connection = async () => {
    await mongoose.connect(process.env.MONGO_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(res => console.log(`Radi Mongo`))
      .catch(error => console.log(error))
}

module.exports = MongoDB_Connection