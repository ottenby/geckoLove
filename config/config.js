if(process.env.NODE_ENV !== 'prduction')require('dotenv').config()


const config = {
    databaseURL:process.env.DATBASE,
    mail:process.env.mail
}

module.exports = config;