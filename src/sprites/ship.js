import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, initialVelocity = 0 }) {
    super(game, x, y, asset)
    game.physics.enable(this, Phaser.Physics.ARCADE)

    this.anchor.setTo(0.5)
    this.body.collideWorldBounds = true
    this.body.bounce.set(0.5)
    this.angle = -90
    this.body.velocity.y = initialVelocity

    this.body.drag.set(40)
    this.body.maxVelocity.set(300)

    game.physics.arcade.enable(this)
    game.add.existing(this)
  }
}
