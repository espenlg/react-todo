var moment = require('moment');

console.log(moment().format());

var now = moment();
console.log('Current timesatemp', now.unix());

var timestamp = 1468108381;
var currentMoment = moment.unix(timestamp);
console.log('Current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
