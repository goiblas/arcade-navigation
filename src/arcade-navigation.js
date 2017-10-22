import Game from './game'
import config from './config'
import Utils from './utils'

class ArcadeNavigation {
  constructor (settings = {}) {
    this.options = Utils.extend(config, settings)
    this.game = null
  }

  init () {
    this.wrapper = document.createElement('div')
    this.wrapper.id = this.options.divName

    const styles = {
      'position': 'absolute',
      'top': 0,
      'left': 0,
      'width': '100%',
      'height': '100%',
      'z-index': this.options['z-index'],
      'pointer-events': 'none'
    }
    document.body.style.position = 'relative'
    Utils.addStyle(this.wrapper, styles)
    document.body.appendChild(this.wrapper)

    this.game = new Game(
      this.wrapper.offsetWidth,
      this.wrapper.offsetHeight,
      this.options)
  }

  paused () {
    this.wrapper.style.display = 'none'
    this.game.paused = true
  }
  continue () {
    this.wrapper.style.display = 'block'
    this.game.paused = false
  }
}

window.ArcadeNavigation = ArcadeNavigation