'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.Logger = function(namespace) {
    return function(msg, toLog) {
        var ns = '[' + namespace + '] '
        var message = toLog ? ns + ' ' + msg + ' ' + toLog : ns + ' ' + msg
        console.log(message) // tslint:disable-line
    }
}
