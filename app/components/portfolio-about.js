import Ember from 'ember'

export default Ember.Component.extend({
  didInsertElement: function () {
    new Vivus('heroku', {duration: 5000})
  }
})
