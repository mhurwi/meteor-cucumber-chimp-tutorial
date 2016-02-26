Widgets = new Meteor.Collection('widgets');

if (Meteor.isClient) {
  Meteor.startup(function() {
    ReactDOM.render(<App />, document.getElementById('render-target'));
  });
}

if (Meteor.isServer) {
  Meteor.publish('widgets', function() {
    return Widgets.find();
  });
}
