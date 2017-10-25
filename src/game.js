import 'pixi'
import 'p2'
import Phaser from 'phaser'

import GameState from './game-state'

export default class Game extends Phaser.Game {
  constructor (w, h, options) {
    super(w, h, Phaser.AUTO, options.id, null, true)

    class GameStateWithAssets extends GameState {
      preload () {
        this.game.load.image('ship', options.ruta + options.imagenes.nave)
        this.game.load.image('singlebullet', options.ruta + options.imagenes.laser)
        this.game.load.spritesheet('explode', options.ruta + options.imagenes.explosion, 128, 128, 16)
        this.game.load.image('particle', options.ruta + options.imagenes.particula)
        this.game.load.image('hole', options.ruta + options.imagenes.hueco)
        this.enemytags = options.enemigos
        this.clickdelay = options.delay
      }
    }
    this.state.add('GameState', GameStateWithAssets, false)
    this.state.start('GameState')
  }
}
