var WPAPI = require( 'wpapi' );

const config = require('./config.json');

var wp = new WPAPI({
    endpoint: config.endpoint,
    username: config.username,
    password: config.password,
    auth: true
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = `${dd}/${mm}/${yyyy}`;
console.log(today);

wp.posts().create({
    title: `${today} - post`,
    status: 'publish'
})
.then(response => console.log(response.id))
.catch(err => console.log(err));
