const got = require('got');
const yargs = require('yargs');

var args = yargs.argv;
var city = args._[0];

(async() => {
    try {
        const { body } = await got.post('http://api.openweathermap.org/data/2.5/weather?q=' + `${city}` + '&appid={API KEY}')
        var report = JSON.parse(body);
        console.log(report);
    } catch (error) {
        console.log("Can't find city");
    }
})();