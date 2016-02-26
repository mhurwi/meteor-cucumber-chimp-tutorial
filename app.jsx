App = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    let subscription = Meteor.subscribe('widgets');

    return {
      widgets: Widgets.find().fetch()
    };
  },

  handleChange(e) {
   this.setState({widgetName: e.target.value});
  },

  handleSubmit(e) {
   e.preventDefault();
   Widgets.insert({name: this.state.widgetName});
  },

  renderWidgets() {
    if (this.data.widgets) {
      return this.data.widgets.map(function(widget) {
        return (<p className="widget-name">{widget.name}</p>);
      });
    }
  },

  render() {
   return (
     <div>
       <h1>Widget Maker</h1>
       { this.renderWidgets() }
       <form onSubmit={this.handleSubmit}>
         <input type="text" name="widgetName" placeholder="Name your new widget..." onChange={this.handleChange}/>
         <input type="submit" value="Create Widget" />
       </form>
     </div>
   )
  }
});
