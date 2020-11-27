const express = require('express');
const bodyParser = require('body-parser');
const nodeMailer = require('nodemailer');
const cors = require('cors');

//import express from express;
//import bodyParser from 'body-parser';
//import nodeMailer from 'nodemailer';
//import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send('welcome to the email page')
})

app.post('/api/emailSent', (req,res) => {
    const data = req.body;
    console.log(data);
    const smtpTransport = nodeMailer.createTransport({
        service:"gmail",
        host:'smtp.gmail.com',
        secure:true,
        port:465,
        auth:{
            user:'user@gmail.com',
            pass:'password'
        }
    });
let mailOptions = {
    from: data.email,
    to:'user@gmail.com',
    subject:`message from ${data.fullName}`,
    html:`
        <h3>Informations</h3>
        <ul>
            <li>User Name : ${data.userName}</li>
            <li>Full Name : ${data.fullName}</li>
            <li>email : ${data.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${data.message}</p>
    `
}
smtpTransport.sendMail(mailOptions,(error,response) => {
    if (error){
        res.send(error);
    }
    else{
        res.send('success');
    }
});
smtpTransport.close();
})



const port = process.env.PORT || 3001;
app.listen(port,(err) => console.log(`server started on port ${port}`));
