// const weights = require('./data/withings.json').reverse();
const weights = require('./data/withings-api.json');

const moment = require('moment');
const fs = require('fs');

// console.log(moment.unix(weights.body.updatetime).format('DD-MM-YY'));

const newWeights = weights.body.measuregrps.map((data) => {
    const measures = data.measures[0];
    const weight = measures.value * Math.pow(10, measures.unit);

    return {
        'weight': weight.toFixed(2),
        'date': moment.unix(data.date).format('DD/MM/YY'),
    };
});

console.log(newWeights[0]);
