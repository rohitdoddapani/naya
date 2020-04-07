const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');


const app = express();

//bodyParser middlewware
app.use(express.json());

//DB config
const db = config.get('mongoURI');

//connect to Mongo
mongoose.connect( process.env.mongoURI || db ,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then( () => console.log('MongoDB connected...'))
    .catch(err => console.log('Error connting db:',err) );

//Use routes
app.use('/api/items',require('./routes/api/items'));
app.use('/api/users',require('./routes/api/users'));
//app.use('/api/auth',require('./routes/api/auth'));

//Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

//heroko step-3
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'frontend','build','index.html'));
    })
}

app.listen(port, () => console.log(`server started on port ${port}`));
