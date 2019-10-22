import { Logger } from '@magikcraft/op-all/lib/log'
import * as events from 'events'
const log = Logger(__filename)

log('@magikcraft/op-all plugin loaded!')

log('Registering Player Join event handler')

events.playerJoin(({ player }) => {
    setTimeout(() => {
        // Initial join is a bit chaotic
        player.setOp(true)
        echo(player, `Hi ${player.name}. You just got op on this server.`)
    }, 1000)
})
