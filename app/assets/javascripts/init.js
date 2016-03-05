window.App = {};

App.start = function() {
  App.groceryList = new App.List();
  ReactDOM.render(React.createElement(App.Grocery), document.getElementById("App"));
};


