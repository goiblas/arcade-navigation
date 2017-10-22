import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, origin }) {
    super(game, x, y, asset)
    game.physics.enable(this, Phaser.Physics.ARCADE)

    this.origin = origin
    this.anchor.setTo(0.5)
    this.tint = 0x000000
    this.alpha = 0.16
    this.angle = -90

    game.add.existing(this)
  }

  update () {
    this.x = this.origin.x
    this.y = this.origin.y + 32
    this.body.angularVelocity = this.origin.body.angularVelocity
  }
}
