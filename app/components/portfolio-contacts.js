/* globals Vivus alert */
import Ember from 'ember'

export default Ember.Component.extend({
  didRender: function () {
    this._super(...arguments)
    this.$().on('click', '#Layer_1', () => { message.reset().play(); console.log('works') })

    this.$().on('scroll', '#Layer_1', () => { message.reset().play() })
    var message = new Vivus('Layer_1', {duration: 100})
  },
  actions: {
    submit: function () {
      alert('Form submit!')
    }
  }
})
