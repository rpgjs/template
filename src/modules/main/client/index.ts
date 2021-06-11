import { RpgClient, RpgModule } from '@rpgjs/client'
import { sprite } from './sprite'
import { sceneMap } from './map'

@RpgModule<RpgClient>({ 
    sprite,
    scenes: {
        map: sceneMap
    }
})
export default class RpgClientEngine {}