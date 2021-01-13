import { RpgPlayer, Control } from '@rpgjs/server'
import { database } from '@rpgjs/starter-kit-server'

export class Player extends RpgPlayer {
    async onConnected() {
        this.setHitbox(20, 16)
        this.setGraphic('male1_2')
        this.setActor(database.Hero)
        await this.changeMap('medieval')
    }
    onInput({ input }) {
      if (input == Control.Back) {
        this.callMainMenu()
      }
    }
}