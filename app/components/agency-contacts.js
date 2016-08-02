import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        submit: function() {
            alert('Form submit!');
        }
    }
});