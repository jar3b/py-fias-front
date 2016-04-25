import Ember from 'ember';

export default Ember.Component.extend({
    placeholder: "Ввведите название населенного пункта",
    searchText: "",
    store: Ember.inject.service('store'),

    actions: {
        search(param) {
            if (param !== '') {
                this.get('store').query('find-result', {text: param}).then((result) => {
                    this.set('model', result);
                });
            } else {
                this.set('model', null);
            }
        }
    }
});
