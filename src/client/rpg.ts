import { RpgClient, RpgClientEngine } from '@rpgjs/client'
import plugins from '../plugins'
import { SceneMap } from './map'
import { Sprite } from './sprite'

@RpgClient({
    plugins,
    spriteClass: Sprite,
    scenes: {
        map: SceneMap
    }
})
export default class RPG extends RpgClientEngine {
    onConnected() { }

    onConnectError(err) { }

    onDisconnect() { }
}