
// spa routes (  )
const express = require('express');
const api     = express.Router();

// routes
const Api_Auth_shared   = require('./services/service__auth/service.controller.sharable.user');
const Api_Auth_google   = require('./services/service__auth/service.controller.google.user');

// authentication routes
api.get('/auth/user'   , Api_Auth_shared.user_get   );
api.get('/auth/logout' , Api_Auth_shared.user_logout );

api.post('/auth/login' , Api_Auth_google.user_google_login );

module.exports = api;
