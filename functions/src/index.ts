
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});
const App_Name = 'Rafiki App';

async function sendWelcomeEmail(email: string , displayName: string) {
    const mailOptions = {
        from: `${App_Name} <rafiki.manager@gmail.com>`,
        to: email,
        subject:'',
        text:''
    }
    mailOptions.subject = `Wellcome to ${App_Name}`;
    mailOptions.text = `Hey ${displayName || ''}! Welcome to the elite team of Travel agents`;

    await mailTransport.sendMail(mailOptions);
    console.log('New welcome email sent to',email);
    return null;
}
exports.sendWelcomeEmail = functions.auth.user().onCreate((user: any)=>{
    const email = user.email;
    const displayName = user.displayName;
    
    return sendWelcomeEmail(email , displayName);
})