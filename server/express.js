const express = require('express');
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = (process.env.SENDGRID_API_KEY);
const path = require ('path');





const app = express();

app.use(bodyParser.json());
// app.use(express.static(path.resolve(__dirname,'public')))
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'Get, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    // add other server routes to path array
    app.use(proxy(['/api' ], { target: 'http://localhost:4000' }));
} 

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('build'));
}
app.get('*',(req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.get('/api', (req, res, next) => {
    res.send('API Status: Up and Running!')
    

});


app.post('/api', (req, res, next ) => {

    console.log(req.body)

    sgMail.setApiKey(SENDGRID_API_KEY);
    console.log(SENDGRID_API_KEY)
    const msg = {
        to: 'dunningray@gmail.com',
        from: req.body.email,
        subject: 'Website Contact',
        text: req.body.message
    }

    sgMail.send(msg)
    .then(result => {

        res.status(200).json({
            success: true
        });
    })
        .catch(err => {
            console.log('error: ', err);
            res.status(401).json({
                success: false
            })
        })
    
});




app.listen(port, () => console.log(`listening from port: ${port}`));