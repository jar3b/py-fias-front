import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
    query: function(store, type, query) {
        var url = this.get('host')+'/find/'+query.text;
        Ember.Logger.log('url:', url);

        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.getJSON(url, query).then(function(data) {
                Ember.run(null, resolve, data);
            }, function(jqXHR) {
                jqXHR.then = null; // tame jQuery's ill mannered promises
                Ember.run(null, reject, jqXHR);
            });
        });
    }
});