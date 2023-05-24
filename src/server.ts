import { expressServer } from '@rpgjs/server/express'
import * as url from 'url'
import modules from './modules'
import globalConfig from './config/server'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

expressServer(modules, {
    globalConfig,
    basePath: __dirname,
    envs: import.meta.env
})