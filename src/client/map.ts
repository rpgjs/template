import { RpgSceneMap, RpgGui, PrebuiltGui } from '@rpgjs/client'

export class SceneMap extends RpgSceneMap {
    onLoad() {
        RpgGui.display(PrebuiltGui.Controls) 
    }
}