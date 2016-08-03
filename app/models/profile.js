import DS from 'ember-data'

export default DS.Model.extend({
  first_name: DS.attr('string'),
  last_name: DS.attr('string'),
  picture: DS.attr('string'),
  hats: DS.attr(),
  description: DS.attr(),
  services: DS.attr(),
  skills: DS.attr(),
  projects: DS.hasMany('projects', { async: true })
})
