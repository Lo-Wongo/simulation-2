
require('dotenv').config();
const express = require('express');
const session = require('express-session');
// const config = require(`${__dirname}/config`);
// const passport = require('passport');
// const auth0Strategy = require('passport-auth0');
const massive = require('massive');
const bodyParser = require('body-parser');
// const cors = require('cors');
const controller = require('./controller');

//initialize variables stored in .env
const {
  SERVER_PORT,
  SESSION_SECRET,
  CONNECTION_STRING
} = process.env;


//Top-level middleware
const app = express();

app.use( express.static( `${__dirname}/../build` ) );

//connecting server to database using massive
massive( CONNECTION_STRING ).then( dbInstance => {
  app.set('db', dbInstance);
}).catch( err => console.log( err) );

const db = app.get('db')

app.use( bodyParser.json() );
// app.use( cors() );
app.use( session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use( require(`${__dirname}../../middlewares/auth`) );


//====user endpoints========
app.post('/api/auth/login', controller.login);
app.post('/api/auth/register', controller.register);
app.post('/api/auth/logout', controller.logout);

//====property endpoints=====
app.post('/', controller.create);
app.get('/', controller.readAll);
app.delete('/:id', controller.delete);
app.get('/filter', controller.filter);



app.listen( SERVER_PORT, () => { 
  console.log(`listening on port ${SERVER_PORT}`); 
})





//passport and Auth STUFF

// app.use((req, res, next) => {
//   if(process.env.DEV_MODE){
//     req.user = {
//     id: 7,
//     name: 'Lloyd',
//     pic: 'http'
//     }
//   }
//   next()
// })


// app.listen(8888)