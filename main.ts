scene.setBackgroundColor(12)
let jugador = sprites.create(assets.image`nave`, SpriteKind.Player)
jugador.setPosition(73, 85)
jugador.setScale(2.1, ScaleAnchor.Middle)
game.onUpdate(function () {
    controller.moveSprite(jugador, 100, 100)
})
