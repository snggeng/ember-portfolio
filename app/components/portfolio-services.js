/* globals Vivus */
import Ember from 'ember'

export default Ember.Component.extend({
  // didInsertElement: function () {
  //   this._super(...arguments)
  //   this.$('#Layer_1').on('click', () => { clock.reset().play() })
  //   var clock = new Vivus('Layer_1', {type: 'oneByOne', duration: 100})
  //   // Ember.$(clock.reset())
  // }
  didRender: function () {
    this._super(...arguments)
    this.$().on('click', '#Layer_2', () => { clock.reset().play(); console.log('works') })

    this.$().on('scroll', '#Layer_2', () => { clock.reset().play() })
    var clock = new Vivus('Layer_2', {duration: 100})
  }
})
