import { RpgSprite } from '@rpgjs/client'

export class Sprite extends RpgSprite {
    // As soon as the sprite is initialized
    onInit() { }

    // As soon as a data is changed on the server side (the name for example), you are able to know the new data but also the old data.
    onChanges(data, old) { }

    // At each tick, the method is called
    onUpdate(obj) {}

    // When the x, y positions change
    onMove() {}
}