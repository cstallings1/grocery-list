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
          onKeyDown = {this.handleKeyDown}
          onChange = { this.handleOnChange }
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
      var itemData =
        {
          item: {
            list_id: App.groceryList.id,
            name: item.name,
            complete: item.complete
          }
        };

      var request = $.ajax({
        url: "/items",
        method: "POST",
        dataType: "json",
        cache: false,
        data: itemData,
        success: function(data) {
          App.groceryList = data;
          this.setState({newItemValue: ""});
        }.bind(this)
      });
    }
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



