var WPAPI = require( 'wpapi' );

const config = require('./config.json');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password
});

// // Promises
wp.posts().then(function( data ) {
    // do something with the returned posts
    console.log(data);
}).catch(function( err ) {
    // handle error

    console.log(err);
});


// wp.posts().create({
//     // "title" and "content" are the only required properties
//     title: 'Your Post Title',
//     content: 'Your post content',
//     // Post will be created as a draft by default if a specific "status"
//     // is not specified
//     status: 'publish'
// }).then(function( response ) {
//     // "response" will hold all properties of your newly-created post,
//     // including the unique `id` the post was assigned on creation
//     console.log( response.id );
// })
