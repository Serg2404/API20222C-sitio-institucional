const nodemailer = require('nodemailer')
// let testAccount = await nodemailer.createTestAccount();

// // create reusable transporter object using the default SMTP transport
// exports.transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: testAccount.user, // generated ethereal user
//     pass: testAccount.pass, // generated ethereal password
//   },
// });