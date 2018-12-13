const randomWords = require('random-words');

module.exports = x => `${x}: ${randomWords({ exactly: 5, join: ' ' })}`