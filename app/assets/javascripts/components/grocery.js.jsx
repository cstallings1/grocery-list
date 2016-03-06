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
              return <App.GroceryListItem key={i} item={item} reRenderGroceryList={this.reRenderGroceryList} />

            }.bind(this))
          }
        </ul>
      </div>
    );
  },

  reRenderGroceryList: function() {
    this.forceUpdate();
  },

  handleAddItem: function() {
    if (this.state.newItemValue !== "") {
      var item = new App.Item(this.state.newItemValue );
      App.groceryList.items.push(item);
      this.setState({newItemValue: ""});
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

});



