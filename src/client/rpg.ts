import { RpgClient, RpgClientEngine } from '@rpgjs/client'
import { spritesheets, sounds } from '@rpgjs/starter-kit-client'
import gui from '@rpgjs/default-gui'
import { SceneMap } from './map'
import { Sprite } from './sprite'

@RpgClient({
    spritesheets,
    sounds,
    gui,
    spriteClass: Sprite,
    scenes: {
        map: SceneMap
    }
})
export default class RPG extends RpgClientEngine {
    
}