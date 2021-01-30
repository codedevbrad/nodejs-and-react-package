
const Users    = require('./service.model');
const passport = require('passport');

const { asyncSupport } = require('@codedevbrad/serverutils');

const generateHashedPassword = require('./service.passport/passport.hashuser');

const { getloggedUserFromDB , getUserFromDB , createNewUser , userLogin } = require('./service.controller.db');

const { authenticate , loginUser } = require('./service.passport/passport.authenticate');

exports.user_google_login  = asyncSupport(  async ( req , res , next ) => {
     const { username , password } = req.body;

     if ( !username || !password ) {
        throw new Error( 'missing username or password' );
     }

     let authenticatedUser  = await authenticate( req , res , next );

     if ( authenticatedUser ) {
          let loginExistingUser = await loginUser( req , authenticatedUser );
          res.status( 200 ).send( loginExistingUser );
     }
     else if ( !authenticatedUser ) {
         let newHash = await generateHashedPassword( password );
         let newUser = await createNewUser( { username , password : newHash } );

         let loginNewUser  = await loginUser( req , newUser );
         res.status( 200 ).send( loginNewUser );
     }
});
