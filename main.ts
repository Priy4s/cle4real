controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playing)) {
        if (level == 1) {
            game.splash("\"Level 1 - The start\"")
        }
        if (level == 2) {
            game.splash("\"Level 2 - The journey\"")
        }
        if (level == 3) {
            game.splash("\"Level 3 - The end\"")
        }
        playing = true
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    level += -1
    if (level == 0) {
        level = 1
        mySprite.sayText(level, 5000, false)
    }
    if (level != 0) {
        mySprite.sayText(level, 5000, false)
    }
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level0`)
    }
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level14`)
    }
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level15`)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    level += 1
    if (level == 4) {
        level = 3
        mySprite.sayText(level, 5000, false)
    }
    if (level != 4) {
        mySprite.sayText(level, 5000, false)
    }
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level0`)
    }
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level14`)
    }
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level15`)
    }
})
let mySprite: Sprite = null
let level = 0
let playing = false
game.splash("\"Select a level\"")
playing = false
tiles.setCurrentTilemap(tilemap`level0`)
level = 1
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . b b d d d 5 5 5 5 5 5 5 b . . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    c b 5 5 b c d d 5 5 5 5 5 5 b . 
    b b c c c d d d 5 5 5 5 5 d b . 
    . . . . c c d d d 5 5 5 b b . . 
    . . . . . . c c c c c b b . . . 
    `, SpriteKind.Player)
mySprite.sayText(level)
