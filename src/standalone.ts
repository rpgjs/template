import { entryPoint } from '@rpgjs/standalone'
import modules from './modules'

document.addEventListener('DOMContentLoaded', function() { 
    entryPoint(modules).start() 
})