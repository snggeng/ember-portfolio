import DS from 'ember-data'
import config from '../config/environment'

export default DS.RESTAdapter.extend({
  host: 'https://api-dot-me.herokuapp.com'
})
