import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor ({ game, asset, instances }) {
    super(game)
    
    for (let x = 0; x < instances; x++) {
      let newHole = this.create(0, 0, asset, [0], false)
      newHole.anchor.setTo(0.5)
      newHole.lifespan = 1000
    }
  }
}
