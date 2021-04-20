import { RpgServer, RpgServerEngine } from '@rpgjs/server'
import plugins from '../plugins'
import { Player } from './player'

@RpgServer({
    plugins,
    basePath: __dirname,
    playerClass: Player
})
export default class RPG extends RpgServerEngine {
    
}