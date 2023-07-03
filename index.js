const requirejs = require('./scripts/require.js');
const restClient = require('./node_modules/@polygon.io/client-js/dist/main');
const rest = restClient ("7I1Tz8oO2vTT4pVlNf3O_N9mC0IOKIme");

rest.stocks.lastQuote("AAPL").then((data) => {
    console.log(data);
}).catch(e => {
    console.error('An error happened: ', e);
});