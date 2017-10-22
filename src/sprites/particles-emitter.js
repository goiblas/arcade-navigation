import Phaser from 'phaser'

export default class extends Phaser.Particles.Arcade.Emitter {
  constructor ({game, asset, max = 800}) {
    super(game, 0, 0, max)
    this.makeParticles(asset)
    this.blendMode = 1
  }
  spawn (x, y) {
    const particlesPerBurt = 5
    const particleLifeSpan = 200

    this.position.setTo(x, y)
    this.explode(particleLifeSpan, particlesPerBurt)
  }
}
