App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 13,
});

App.Router.map(function() {
  this.resource('about');
  this.resource('notes');
});

App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('notes');
  }
});

App.NotesRoute = Ember.Route.extend({
  model: function() {
    return App.Note.find();
  }
});

App.NoteController = Ember.ObjectController.extend({
  editingMode: false,

  doneEditing: function() {
    var note = this.get('model');
    //note.save();
    //this.set('editingMode', false);
    this.get('store').commit();
  },

  edit: function() {
    this.set('editingMode', true);
  }
});

App.Note = DS.Model.extend({
  content:   DS.attr('string'),
  tags:      DS.attr('string'),
  url:       DS.attr('string'),
  createdAt: DS.attr('date')
});
