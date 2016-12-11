const randomIntFromInterval = function (min, max, dp = '0') {

    let result = Math.random() * (max - min + 1) + min;

    if (dp === '0') {
        return Math.floor(result);
    } else {
        return result.toFixed(dp);
    }
}

module.exports = randomIntFromInterval;
