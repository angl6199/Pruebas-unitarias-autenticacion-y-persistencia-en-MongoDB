const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'lea.ebert86@ethereal.email',
        pass: 'gtfgKn8WEnusCnnqBt'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
