var ENTER_KEY = 13;

App.Grocery = React.createClass({
  propTypes: {},

  getInitialState: function() {
    return { newItemValue: "" }
  },

  render: function() {
    return (
      <div>
        <h1>Grocery List</h1>
        <input placeholder="item"
          value = { this.state.newItemValue }
          onChange = { this.handleOnChange }
          onKeyDown = {this.handleKeyDown}
        />
        <button onClick={this.handleAddItem}>add item</button>
        <ul>
          {
            App.groceryList.items.map(function(item, i){
              var listItemClass = (item.complete ? "complete" : "incomplete")
              return (
                <li key={i} className={listItemClass}>
                  <i className="fa fa-check fa-1x" onClick={this.handleCompleteItem.bind(null, item)}></i>
                  {item.name}
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
      this.forceUpdate();
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



