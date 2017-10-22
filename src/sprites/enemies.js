import Phaser from 'phaser'

export default class extends Phaser.Group {
  constructor ({ game, tags }) {
    super(game)

    tags.forEach(t => {
      let tag = Array.from(document.querySelectorAll(t))
      tag.forEach(elem => {
        let coords = elem.getBoundingClientRect()
        let elw = elem.offsetWidth
        let elh = elem.offsetHeight

        let rect = game.add.sprite(coords.left, coords.top, null)
        rect.body.setSize(elw, elh, 0, 0)
        rect.html = elem

        this.add(rect)
      })
    })
  }
}
