const moment = require('moment-timezone')

module.exports = {
    formatDate: function (date, format) {
        return moment(date).tz('America/New_York').tformat(format)
    },
    stripTags: function (input) {
        return input.replace(/<(?:.|\n)*?>/gm, '')
    },
    truncateBody: function (input) {
        if (input.length > 100) {
            return input.substring(0, 100) + '...'
        }
        return input
    }
}