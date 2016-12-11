var WPAPI = require( 'wpapi' );

const config = require('./config.json');
const randomIntFromInterval = require('./helpers/randomIntFromInterval');
const todaysDate = require('./helpers/todaysDate');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});

const postId = (process.argv[2]) ? process.argv[2] : 3217;
const weight = randomIntFromInterval(50, 100, 2);
const date = todaysDate();

wp.health = wp.registerRoute('wp/v2', '/health/(?P<id>\\d+)');

wp.health().id( postId ).update({
    _ah_health_comments: 'some comments that are about this post',
    _ah_health_weight: weight, // random weight between 50 and 100
    title: `${weight}kg - ${date}`,
})
.then(response => console.log(response))
.catch(err => console.log(err));
