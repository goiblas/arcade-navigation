import Phaser from 'phaser'
import ParticlesEmitter from './sprites/particles-emitter'
import Ship from './sprites/ship'
import Shadow from './sprites/shadow'
import Holes from './sprites/holes'
import WeaponEmitter from './sprites/weapon-emitter'
import ExploseEmitter from './sprites/explose-emitter'
import Enemies from './sprites/enemies'

export default class extends Phaser.State {
  create () {
    this.middlePosition = window.innerHeight / 2
    this.maxPosition = document.body.offsetHeight - this.middlePosition * 2

    this.game.world.enableBody = true
    this.game.physics.startSystem(Phaser.Physics.ARCADE)

    this.cursors = this.game.input.keyboard.createCursorKeys()
    this.fireButton = this.game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR)

    this.enemies = new Enemies({
      game: this.game,
      tags: this.enemytags
    })

    this.particles = new ParticlesEmitter({
      game: this.game,
      asset: 'particle',
      max: 300
    })

    this.holes = new Holes({
      game: this.game,
      asset: 'hole',
      instances: 100
    })

    this.ship = new Ship({
      game: this.game,
      x: 200,
      y: this.middlePosition + 20,
      asset: 'ship',
      initialVelocity: -100
    })

    this.shadow = new Shadow({
      game: this.game,
      x: 200,
      y: this.middlePosition + 20,
      asset: 'ship',
      origin: this.ship
    })

    this.weapon = new WeaponEmitter({
      game: this.game,
      asset: 'singlebullet',
      amount: 30,
      distance: 300,
      ship: this.ship
    })

    this.explosions = new ExploseEmitter({
      game: this.game,
      asset: 'explode',
      instances: 30

    })
  }

  checkScrollPosition () {
    let currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop

    let nPos = this.ship.position.y - this.middlePosition
    let dif = currentScrollPosition - nPos
    if ((dif > 2 || dif < -2) && nPos > 0 && nPos < this.maxPosition) {
      window.scrollTo(0, nPos)
    }
  }

  update () {
    if (this.ship.body.velocity.y !== 0) {
      this.checkScrollPosition()
    }

    if (this.cursors.up.isDown) {
      this.game.physics.arcade.accelerationFromRotation(this.ship.rotation, 300, this.ship.body.acceleration)
    } else if (this.cursors.down.isDown) {
      this.ship.body.velocity.x *= 0.95
      this.ship.body.velocity.y *= 0.95
    } else {
      this.ship.body.acceleration.set(0)
    }

    if (this.cursors.left.isDown) {
      this.ship.body.angularVelocity = -300
    } else if (this.cursors.right.isDown) {
      this.ship.body.angularVelocity = 300
    } else {
      this.ship.body.angularVelocity = 0
    }

    if (this.fireButton.isDown) {
      this.weapon.fire()
    }

    this.weapon.forEach(w => {
      if (w.alive) {
        let tmp = w.lifespan - this.game.time.elapsed
        if (tmp <= 1) {
          this.particles.spawn(w.x, w.y)
          let addhole = this.holes.getFirstExists(false)
          addhole.reset(w.x, w.y)
          addhole.lifespan = 1000

          this.game.physics.arcade.overlap(w, this.enemies, (shot, enemy) => {
            let explosionAnimation = this.explosions.getFirstExists(false)
            explosionAnimation.reset(shot.x, shot.y)
            explosionAnimation.play('explode', 30, false, true)

            setTimeout(() => enemy.html.click(), this.clickdelay)
          })
        }
      }
    })
    this.game.world.wrap(this.ship, 50)
  }
}
