/* globals Vivus */
import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    this._super(...arguments)
    this.$().on('click', '#Layer_4', () => { clock.reset().play(); console.log('works') })

    this.$().on('scroll', '#Layer_4', () => { clock.reset().play() })
    var clock = new Vivus('Layer_4', {duration: 100})
  }
})
