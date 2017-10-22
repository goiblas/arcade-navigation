import 'pixi'
import Phaser from 'phaser'

import GameState from './states/Game'

export default class extends Phaser.Game {
  constructor() {
        super(600, 800, Phaser.CANVAS, 'content', null)

        this.state.add('Game', GameState, false)
        this.state.start('game')
    }
}