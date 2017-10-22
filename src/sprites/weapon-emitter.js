import Phaser from 'phaser'

export default class extends Phaser.Weapon {
  constructor ({ game, asset, amount, distance, ship }) {
    super(game)

    this.createBullets(amount, asset)
    this.bulletKillType = Phaser.Weapon.KILL_LIFESPAN
    this.bulletLifespan = distance
    this.bulletSpeed = 800
    this.fireRate = 100
    this.bulletAngleVariance = 2
    this.bulletCollideWorldBounds = true

    this.trackSprite(ship, 0, 0, true)
  }
}
