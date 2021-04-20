import { RpgPlayer, RpgMap, Control } from '@rpgjs/server'

export class Player extends RpgPlayer {
    onConnected() { }

    onInput({ input }) {
        if (input == Control.Back) {
            this.callMainMenu()
        }
    }

    onJoinMap(map: RpgMap) { }

    onLeaveMap(map: RpgMap) { }

    onInVision(other: RpgPlayer) { }

    onOutVision(other: RpgPlayer) { }

    onLevelUp(nbLevel) { }

    onDead() { }

    onDisconnected() { }
}