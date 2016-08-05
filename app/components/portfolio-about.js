/* globals Vivus */
import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    this._super(...arguments)
    this.$().on('click', '#Layer_6', () => { clock.reset().play(); console.log('works') })

    this.$().on('scroll', '#Layer_6', () => { clock.reset().play() })
    var clock = new Vivus('Layer_6', {duration: 100})
  }
})
