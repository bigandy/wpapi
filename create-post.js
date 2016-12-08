var WPAPI = require( 'wpapi' );

const config = require('./config.json');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});


wp.posts().create({
    // "title" and "content" are the only required properties
    title: 'Your Post Title',
    content: 'Your post content',
    // Post will be created as a draft by default if a specific "status"
    // is not specified
    status: 'publish'
})
.then(response => console.log(response.id))
.catch(err => console.log(err));
