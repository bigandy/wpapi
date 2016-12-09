var WPAPI = require( 'wpapi' );

const config = require('./config.json');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});

wp.posts().create({
  title: 'This post has media, tags & categories!',
  content: 'Excellent and compelling demonstration',
  // categories: [ 7, 42 ],
  // tags: [ 33, 71, 193 ]
}).then(function( post ) {
  // Create the media record & upload your image file
  var filePath = './images/owl.jpg';
  return wp.media().file( filePath ).create({
    title: 'Amazing featured image',
    post: post.id
  }).then(function( media ) {

    // Set the new media record as the post's featured media
    return wp.posts().id( post.id ).update({
      featured_media: media.id,
      status: 'publish'
    });
  });
});
