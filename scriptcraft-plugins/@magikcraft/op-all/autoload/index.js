'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var log_1 = require('@magikcraft/op-all/lib/log')
var events = require('events')
var log = log_1.Logger(__filename)
log('@magikcraft/op-all plugin loaded!')
log('Registering Player Join event handler')
events.playerJoin(function(_a) {
    var player = _a.player
    setTimeout(function() {
        // Initial join is a bit chaotic
        player.setOp(true)
        echo(player, 'Hi ' + player.name + '. You just got op on this server.')
    }, 1000)
})
