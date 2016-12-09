//Available in nodejs

var NodeWebcam = require( "node-webcam" );
var WPAPI = require( 'wpapi' );

const config = require('./config.json');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});



//Default options

var opts = {
    width: 1280,
    height: 720,
    delay: 0,
    quality: 100,
    output: "jpeg",
    verbose: true
};

var Webcam = NodeWebcam.create( opts );


//Will automatically append location output type

Webcam.capture( "test_picture" );
var filePath = 'images/my_picture';
NodeWebcam.capture( filePath, opts, function() {

    wp.posts().create({
      title: 'Taken with my webcam!',
      content: 'Excellent and compelling demonstration',
    }).then(function( post ) {
      // Create the media record & upload your image file
      filePath = filePath + '.jpg';
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

});
