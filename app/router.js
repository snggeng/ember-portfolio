import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  this.route('profiles')
  this.route('projects', function () {
    this.route('show', {
      path: ':project_id'
    })
  })
  this.route('resume')
})

export default Router
