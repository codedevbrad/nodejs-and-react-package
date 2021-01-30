
const Users    = require('./service.model');

exports.user_logout = ( req , res , next ) => {
    console.log('logged out');
    req.logout();
    if ( req.user ) {  return res.status(500).send({ msg: 'something went wrong logging out' }) }
    res.status(200).json( { logoutHappened: true } );
}

exports.user_get = ( req , res , next ) => {
  Users.findById( { _id: req.user._id } )
       .select('-password')
       .then( user => {
         if ( !user ) { return res.status(500).send({ msg: 'no user found' }) }
         res.status( 200 ).json( user );
       })
       .catch( next );
}
