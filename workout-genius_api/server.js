/*jshint esversion: 6 */ 
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const facebookStrategy = require('passport-facebook').Strategy;
const expressSession = require('express-session');
const db = require('./models');
const workoutRoutes = require('./routes/workouts');
const authRoutes = require('./routes/auth');
const authHelpers = require('./helpers/auth');
const passportHelpers = require('./helpers/passport');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSession({ secret: process.env.EXPRESS_SESSION_SECRET }));
app.use(express.static(__dirname + '/public'));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({origin: 'http://localhost:3000'}));

//Passport facebook strategy
passportHelpers.passportInit;
passportHelpers.serialize;
passportHelpers.deserialize;

app.use('/api/workouts', workoutRoutes);
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 4040)