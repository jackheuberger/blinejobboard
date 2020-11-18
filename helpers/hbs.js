const moment = require('moment')

module.exports = {
    formatDate: function(date, format) {
        return moment(date).format(format)
    },
    stripTags: function(input) {
        return input.replace(/<(?:.|\n)*?>/gm,'')
    }
}