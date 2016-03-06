var ENTER_KEY = 13;

App.Grocery = React.createClass({
  propTypes: {},

  getInitialState: function() {
    return { newItemValue: "" }
  },

  render: function() {
    return (
      <div className="lead">
        <h1 className="main-title">Grocery List</h1>
        <input className="form-control" placeholder="item"
          value = { this.state.newItemValue }
          onChange = { this.handleOnChange }
          onKeyDown = {this.handleKeyDown}
        />
        <button className="btn btn-primary" onClick={this.handleAddItem}>add item</button>
        <ul className="list-group">
          {
            App.groceryList.items.map(function(item, i){
              var listItemClass = (item.complete ? "complete" : "incomplete")
              return (
                <li key={i} className={listItemClass + " list-group-item"}>
                  <i className="fa fa-check fa-1x" onClick={this.handleCompleteItem.bind(null, item)}></i>
                  <span className="item">{item.name}</span>
                  <i className="fa fa-times fa-1x" onClick={this.handleDeleteItem.bind(null, item)}></i>
                </li>
              );
            }.bind(this))
          }
        </ul>
      </div>
    );
  },


  handleAddItem: function() {
    if (this.state.newItemValue !== "") {
      var item = new App.Item(this.state.newItemValue );
      App.groceryList.items.push(item);
      this.setState({newItemValue: ""});
      // this.forceUpdate();
    };
  },

  handleKeyDown: function(event) {
    if (event.which === ENTER_KEY) {
      this.handleAddItem();
    };
  },

  handleOnChange: function(event) {
    this.setState({ newItemValue: event.target.value });
  },

  handleDeleteItem: function(item) {
    var index = App.groceryList.items.indexOf(item);
    App.groceryList.items.splice(index, 1);
    this.setState({newItemValue: ""});
  },

  handleCompleteItem: function(item) {
    item.complete = true;
    this.forceUpdate();
  },

});



