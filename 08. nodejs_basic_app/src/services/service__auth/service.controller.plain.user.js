
const passport = require('passport');
const Users    = require('./service.model');

require('./service.passport/passport.setup') ( passport );

exports.user_plain_login = ( req , res , next ) => {
    const { username , password } = req.body;

    // simple validation
    if ( !username || !password ) {
          throw new Error( 'missing username or password' );
    }
    res.status( 200 ).send( { username , password } );
}

exports.user_plain_register = ( req , res , next ) => {

   const { username , password , imgUrl } = req.body;

   if ( !username || !password || imgUrl  ) {
      throw new Error('missing username or password');
   }
   res.status( 200 ).send( { username , password } );
}
