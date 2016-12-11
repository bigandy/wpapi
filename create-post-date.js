var WPAPI = require( 'wpapi' );

const config = require('./config.json');
const todaysDate = require('./helpers/todaysDate');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});

const today = todaysDate();
console.log(today);

wp.posts().create({
    title: `${today} - post`,
    status: 'publish'
})
.then(response => console.log(response.id))
.catch(err => console.log(err));
