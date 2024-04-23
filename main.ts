namespace SpriteKind {
    export const Chest = SpriteKind.create()
    export const Key = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    projectileDirec = 0
    playerSprite.setImage(img`
        . . . . 4 4 5 5 5 . . . . .
        . . . 4 4 4 4 4 4 4 . . . .
        . . 4 5 4 4 8 8 4 4 4 . . .
        . . 4 5 4 8 9 6 8 4 4 . . .
        . . 5 5 4 4 9 6 8 4 4 . . .
        . . . 4 4 4 9 6 4 4 . . . .
        . . . . 4 9 6 6 4 . . . . .
        . . . f 6 9 9 9 6 6 f . . .
        . . 6 6 9 6 9 1 9 6 6 6 . .
        . . 6 6 9 1 9 1 9 6 6 6 . .
        . . 4 5 9 9 9 9 9 6 5 6 . .
        . . 2 f 6 6 6 6 6 6 4 4 . .
        . . . . 6 6 . . 6 6 . . . .
        . . . . 5 5 . . 5 5 . . . .
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.sayText(":)", 1000, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playing)) {
        if (level == 1) {
            game.splash("\"Level 1 - The start\"")
            chest = sprites.create(img`
                . . b b b b b b b b b b b b . . 
                . b e 4 4 4 4 4 4 4 4 4 4 e b . 
                b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
                b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
                b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
                b e e 4 4 4 4 4 4 4 4 4 4 e e b 
                b e e e e e e e e e e e e e e b 
                b e e e e e e e e e e e e e e b 
                b b b b b b b d d b b b b b b b 
                c b b b b b b c c b b b b b b c 
                c c c c c c b c c b c c c c c c 
                b e e e e e c b b c e e e e e b 
                b e e e e e e e e e e e e e e b 
                b c e e e e e e e e e e e e c b 
                b b b b b b b b b b b b b b b b 
                . b b . . . . . . . . . . b b . 
                `, SpriteKind.Chest)
            key = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 5 5 5 . . . . . . . . . . . 
                . 5 5 5 5 5 . . . . . . . . . . 
                5 5 . . 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 . . 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 . . 5 5 . . . . . . 5 . 5 . 
                . 5 5 5 5 5 . . . . . . 5 . 5 . 
                . . 5 5 5 . . . . . . . 5 . 5 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Key)
            chest.setPosition(8, 9)
            key.setPosition(250, 250)
        }
        if (level == 2) {
            game.splash("\"Level 2 - The journey\"")
        }
        if (level == 3) {
            game.splash("\"Level 3 - The end\"")
        }
        playing = true
        controller.moveSprite(playerSprite, 75, 75)
        scene.cameraFollowSprite(playerSprite)
    } else {
        if (projectileDirec == 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerSprite, 0, -120)
        }
        if (projectileDirec == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerSprite, 0, 120)
        }
        if (projectileDirec == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerSprite, -120, 0)
        }
        if (projectileDirec == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . 2 1 1 1 1 2 . . . . . 
                . . . . . . 3 1 1 3 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, playerSprite, 120, 0)
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playing)) {
        level += -1
        if (level == 0) {
            level = 1
            playerSprite.sayText(level, 1000, true)
        }
        if (level != 0) {
            playerSprite.sayText(level, 1000, true)
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
    } else {
        projectileDirec = 2
        playerSprite.setImage(img`
            . . . . 4 4 5 5 5 . . . . . 
            . . . 4 4 4 4 4 4 4 . . . . 
            . . 9 4 4 4 5 4 4 4 8 . . . 
            . . 9 5 4 9 4 9 5 4 8 9 . . 
            . . 9 5 4 5 9 4 9 4 8 6 9 . 
            . . . 4 4 4 4 9 4 4 . 6 9 . 
            . . . . 4 4 4 4 4 . 6 9 . . 
            . . . . 9 4 4 f f f 6 6 . . 
            . . . . 5 9 9 6 6 9 9 . . . 
            . . . . 5 9 9 6 6 9 9 . . . 
            . . . . 9 9 6 5 4 9 . . . . 
            . . . . . 6 6 4 4 . . . . . 
            . . . . . . 6 6 6 . . . . . 
            . . . . . . 5 5 5 . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Chest, function (sprite, otherSprite) {
    if (keyFound) {
        sprites.destroy(chest, effects.hearts, 500)
        game.showLongText("You beat the level!", DialogLayout.Bottom)
        game.reset()
    }
    if (!(keyFound)) {
        game.showLongText("You haven't found the key yet!", DialogLayout.Bottom)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    sprites.destroy(key, effects.hearts, 500)
    keyFound = true
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprites.destroy(sprite)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(playing)) {
        level += 1
        if (level == 4) {
            level = 3
            playerSprite.sayText(level, 1000, true)
        }
        if (level != 4) {
            playerSprite.sayText(level, 1000, true)
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
    } else {
        projectileDirec = 3
        playerSprite.setImage(img`
            . . . . . 5 5 5 4 4 . . . . 
            . . . . 4 4 4 4 4 4 4 . . . 
            . . . 8 4 4 4 5 4 4 4 9 . . 
            . . 9 8 4 5 9 4 9 4 5 9 . . 
            . 9 6 8 4 9 4 9 5 4 5 9 . . 
            . 9 6 . 4 4 9 4 4 4 4 . . . 
            . . 9 6 . 4 4 4 4 4 . . . . 
            . . 6 6 f f f 4 4 9 . . . . 
            . . . 9 9 6 6 9 9 5 . . . . 
            . . . 9 9 6 6 9 9 5 . . . . 
            . . . . 9 4 5 6 9 9 . . . . 
            . . . . . 4 4 6 6 . . . . . 
            . . . . . 6 6 6 . . . . . . 
            . . . . . 5 5 5 . . . . . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    projectileDirec = 1
    playerSprite.setImage(img`
        . . . . 4 4 5 5 5 . . . . . 
        . . . 4 4 4 4 4 4 4 . . . . 
        . . 4 5 4 9 4 9 5 4 4 . . . 
        . . 4 5 4 4 9 4 9 4 4 . . . 
        . . 5 5 4 9 4 9 4 4 4 . . . 
        . . . 4 4 9 9 4 5 4 . . . . 
        . . . . 4 4 4 4 4 . . . . . 
        . . . f 9 4 4 4 9 6 f . . . 
        . . f 6 9 9 5 5 9 4 6 6 . . 
        . . 6 6 4 9 5 9 9 6 6 6 . . 
        . . 6 5 6 9 9 9 6 2 5 f . . 
        . . 5 4 6 6 6 6 6 6 f 4 . . 
        . . . . 6 6 . . 6 6 . . . . 
        . . . . 5 5 . . 5 5 . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let enemyDirec = 0
let enemySprite1: Sprite = null
let projectile: Sprite = null
let key: Sprite = null
let chest: Sprite = null
let projectileDirec = 0
let keyFound = false
let playerSprite: Sprite = null
let level = 0
let playing = false
game.splash("\"Select a level\"")
playing = false
tiles.setCurrentTilemap(tilemap`level0`)
level = 1
playerSprite = sprites.create(img`
    . . . . 4 4 5 5 5 . . . . .
        . . . 4 4 4 4 4 4 4 . . . .
        . . 4 5 4 9 4 9 5 4 4 . . .
        . . 4 5 4 4 9 4 9 4 4 . . .
        . . 5 5 4 9 4 9 4 4 4 . . .
        . . . 4 4 9 9 4 5 4 . . . .
        . . . . 4 4 4 4 4 . . . . .
        . . . f 9 4 4 4 9 6 f . . .
        . . f 6 9 9 5 5 9 4 6 6 . .
        . . 6 6 4 9 5 9 9 6 6 6 . .
        . . 6 5 6 9 9 9 6 2 5 f . .
        . . 5 4 6 6 6 6 6 6 f 4 . .
        . . . . 6 6 . . 6 6 . . . .
        . . . . 5 5 . . 5 5 . . . .
    `, SpriteKind.Player)
playerSprite.sayText(level)
keyFound = false
info.setScore(0)
game.onUpdateInterval(5000, function () {
    if (playing) {
        enemySprite1 = sprites.create(img`
            ....................ccfff...........
            ..........fffffffffcbbbbf...........
            .........fbbbbbbbbbfffbf............
            .........fbb111bffbbbbff............
            .........fb11111ffbbbbbcff..........
            .........f1cccc11bbcbcbcccf.........
            ..........fc1c1c1bbbcbcbcccf...ccccc
            ............c3331bbbcbcbccccfccddbbc
            ...........c333c1bbbbbbbcccccbddbcc.
            ...........c331c11bbbbbcccccccbbcc..
            ..........cc13c111bbbbccccccffbccf..
            ..........c111111cbbbcccccbbc.fccf..
            ...........cc1111cbbbfdddddc..fbbcf.
            .............cccffbdbbfdddc....fbbf.
            ..................fbdbbfcc......fbbf
            ...................fffff.........fff
            `, SpriteKind.Enemy)
        enemyDirec = randint(0, 1)
        if (enemyDirec == 0) {
            enemySprite1.setPosition(-10, randint(10, 250))
            enemySprite1.setVelocity(75, 0)
            enemySprite1.setImage(img`
                ...........fffcc....................
                ...........fbbbbcfffffffff..........
                ............fbfffbbbbbbbbbf.........
                ............ffbbbbffb111bbf.........
                ..........ffcbbbbbff11111bf.........
                .........fcccbcbcbb11cccc1f.........
                ccccc...fcccbcbcbbb1c1c1cf..........
                cbbddccfccccbcbcbbb1333c............
                .ccbddbcccccbbbbbbb1c333c...........
                ..ccbbcccccccbbbbb11c133c...........
                ..fccbffccccccbbbb111c31cc..........
                ..fccf.cbbcccccbbbc111111c..........
                .fcbbf..cdddddfbbbc1111cc...........
                .fbbf....cdddfbbdbffccc.............
                fbbf......ccfbbdbf..................
                fff.........fffff...................
                `)
        }
        if (enemyDirec == 1) {
            enemySprite1.setPosition(260, randint(10, 250))
            enemySprite1.setVelocity(-75, 0)
        }
    }
})
