/* globals Vivus */
import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    this._super(...arguments)
    this.$().on('click', '#Layer_3', () => { clock.reset().play(); console.log('works') })

    this.$().on('scroll', '#Layer_3', () => { clock.reset().play() })
    var clock = new Vivus('Layer_3', {duration: 100})
  }
})
