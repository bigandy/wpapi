const WPAPI = require( 'wpapi' );
const loremIpsum = require('lorem-ipsum')

const config = require('./config.json');
const randomIntFromInterval = require('./helpers/randomIntFromInterval');
const todaysDate = require('./helpers/todaysDate');

const wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});

const weight = randomIntFromInterval(50, 100, 2);
const date = todaysDate();

wp.health = wp.registerRoute('wp/v2', '/health/(?P<id>\\d+)');
// wp.health().create({})... // create a health record
wp.health().create({
    title: `${weight}kg - ${date}`,
    _ah_health_comments: loremIpsum(),
    _ah_health_weight: weight, // random weight between 50 and 100
    status: 'publish'
})
.then(response => console.log(response))
.catch(err => console.log(err));
