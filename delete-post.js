var WPAPI = require( 'wpapi' );

const config = require('./config.json');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});

const postId = 3154;

wp.posts().id( postId ).delete()
.then(response => console.log(response.id))
.catch(err => console.log(err));
