var WPAPI = require( 'wpapi' );

const config = require('./config.json');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});

const postId = 3154;

wp.posts().id( postId ).update({
    // Update the excerpt
    excerpt: 'there once was a person called HOT',
}).then(function( response ) {
    console.log( response );
})
.then(response => console.log(response.id))
.catch(err => console.log(err));
