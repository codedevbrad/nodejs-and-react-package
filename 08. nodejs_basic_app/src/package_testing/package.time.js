
const { time } = require('@codedevbrad/better_date');

const { timeDifference , toJSON , timeNow , dateNow , returnMonth , returnDay , daysInMonth } = time;

module.exports.time = ( req , res , next ) => {
    const time = new Date( );
    let date__example1  = new Date( "07/09/2020 21:00:00" );
    let date__example2  = new Date( "06/09/2020 19:00:00" );

    res.status( 200 ).send(
      toJSON( date__example1 ) ,
      '------------------' ,
      toJSON( date__example2 )
    );
};

module.exports.timebetween = ( req , res , next ) => {
    let date__example1  = new Date( "07/09/2020 21:00:00" );
    let date__example2  = new Date( "06/09/2020 19:00:00" );

    res.status( 200 ).send(
        timeDifference(
            date__example1 , date__example2
        );
    )
}
