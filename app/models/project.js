import DS from 'ember-data'

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr(),
  skills: DS.attr(),
  links: DS.attr(),
  projects: DS.belongsTo('profile', { async: true })
})
