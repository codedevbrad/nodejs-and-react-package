// import axios from 'axios';

const config = { headers: { 'Content-Type': 'application/json' } };
const configFile = { headers: {'Content-Type': 'multipart/form-data' }};

import signInWithGoogleAsync from './googlelogin';

export const loginLibrary = {
    getUser: ( ) => new Promise( ( resolve , reject ) => {
          axios.get('/api/auth/user' )
               .then(  res => resolve( res.data ))
               .catch( err =>  reject( err.response.data ));
    }) ,

    loginWithGoogle: () => new Promise( async ( resolve , reject ) => {
          signInWithGoogleAsync()
              .then( res => {
                  let { accessToken , refreshToken , user } = res.body;
                  // send data to server...
                  let { email , username , googleId } = user;
                  const body = JSON.stringify({
                       username: email ,
                       password: googleId ,
                       accessObj: accessToken ,
                       refreshToken: refreshToken
                  });

                  console.log( user );
                  // axios.post('/api/auth/login' , body , config )
                  //      .then(  res => resolve( res.data ))
                  //      .catch( err =>  reject( err.response.data ));
                  // update user to context.
                  resolve({
                    accessToken , refreshToken , user
                  });
              })
              .catch( err => reject( err ) );
    }) ,
    post_step1: ( ) => new Promise( async ( resolve , reject ) => {
        axios.post('/api/app/register/stage1' , body , config )
             .then(  res => {
                resolve( res.data );
              })
             .catch( err =>  reject( err.response.data ));
    }) ,
    post_step2: ( ) => new Promise( async ( resolve , reject ) => {
        axios.post('/api/app/register/stage2' , body , config )
             .then(  res => {
               resolve( res.data );
             })
             .catch( err =>  reject( err.response.data ));
    }) ,
    post_step3: ( ) => new Promise( async ( resolve , reject ) => {
        axios.post('/api/app/register/stage3' , body , config )
             .then(  res => {
               resolve( res.data );
             })
             .catch( err =>  reject( err.response.data ));
    })
};
