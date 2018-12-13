const randomWords = require('random-words');

let randomString = randomWords({ exactly: 5, join: ' ' });

module.exports = x => `${x}: ${randomString}`