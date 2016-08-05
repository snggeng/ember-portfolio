/* globals Vivus alert */
import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    this._super(...arguments)
    this.$().on('click', '#Layer_7', () => { message.reset().play(); console.log('works') })

    this.$().on('scroll', '#Layer_7', () => { message.reset().play() })
    var message = new Vivus('Layer_7', {duration: 100})
  },
  actions: {
    submit: function () {
      alert('Thank you for getting in touch! I\'ll get back to you as soon as I can.')
    }
  }
})
