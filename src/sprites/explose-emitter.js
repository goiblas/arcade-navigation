import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor ({ game, asset, instances }) {
    super(game)

    for (let x = 0; x < instances; x++) {
      let explosion = this.create(0, 0, asset, [0], false)
      explosion.anchor.setTo(0.5, 0.5)
      explosion.animations.add(asset)
    }
  }
}
