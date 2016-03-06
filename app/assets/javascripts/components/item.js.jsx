App.GroceryListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object,
    reRenderGroceryList: React.PropTypes.func,
  },

  render: function() {
    var listItemClass = (this.props.item.complete ? "complete" : "incomplete")
    return (
      <li className={listItemClass + " list-group-item"}>
        <i className="fa fa-check fa-1x"
          onClick={this.handleCompleteItem.bind(null, this.props.item)}>
        </i>
        <span className="item">{this.props.item.name}</span>
        <i className="fa fa-times fa-1x"
          onClick={this.handleDeleteItem.bind(null, this.props.item)}>
        </i>
      </li>
    );
  },

  handleDeleteItem: function(item) {
    var itemData =
      {
        item: {
          list_id: App.groceryList.id,
          name: item.name,
          complete: item.complete
        }
      };
    var request = $.ajax({
      url: "/items/" + this.props.item.id,
      method: "DELETE",
      dataType: "json",
      cache: false,
      data: itemData,
      success: function(data) {
          App.groceryList = data;
          this.props.reRenderGroceryList();
        }.bind(this)
    });
  },

  handleCompleteItem: function(item) {
    var itemData =
      {
        item: {
          list_id: App.groceryList.id,
          name: item.name,
          complete: item.complete
        }
      };
    var request = $.ajax({
      url: "/items/" + this.props.item.id,
      method: "PATCH",
      dataType: "json",
      cache: false,
      data: itemData,
      success: function(data) {
          App.groceryList = data;
          this.props.reRenderGroceryList();
        }.bind(this)
    });
  },
});


