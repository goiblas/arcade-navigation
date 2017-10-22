import 'pixi'
import 'p2'
import Phaser from 'phaser'

import GameState from './game-state'

export default class Game extends Phaser.Game {
  constructor (w, h, options) {
    super(w, h, Phaser.AUTO, options.divName, null, true)

    class GameStateWithAssets extends GameState {
      preload () {
        this.game.load.image('ship', options.ship)
        this.game.load.image('singlebullet', options.bullet)
        this.game.load.spritesheet('explode', options.explode, 128, 128, 16)
        this.game.load.image('particle', options.particle)
        this.game.load.image('hole', options.hole)
        this.enemytags = options.enemies
        this.clickdelay = options.delay
      }
    }
    this.state.add('GameState', GameStateWithAssets, false)
    this.state.start('GameState')
  }
}