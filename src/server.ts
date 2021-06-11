
import http from 'http'
import express from 'express'
import { Server } from 'socket.io'
import { entryPoint } from '@rpgjs/server'
import modules from './modules' 

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    maxHttpBufferSize: 1e4
})
const rpgGame = entryPoint(modules, { io, basePath: __dirname })
rpgGame.app = app // Useful for plugins (monitoring, backend, etc.)

app.use('/', express.static(__dirname + '/../client'))

server.listen(PORT, () =>  {
    rpgGame.start()
    console.log(`
        ===> MMORPG is running on http://localhost:${PORT} <===
    `)
}) 