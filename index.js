const { restClient } = require('@polygon.io/client-js');
const rest = restClient("7I1Tz8oO2vTT4pVlNf3O_N9mC0IOKIme");
rest.stocks.lastTrade("AAPL").then((data) => {
    console.log(data);
}).catch(e => {
    console.error('An error happened: ', e);
});

rest.stocks.lastQuote("AAPL").then((data) => {
    console.log(data);
}).catch(e => {
    console.error('An error happened: ', e);
});