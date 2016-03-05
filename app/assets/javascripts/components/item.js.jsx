var Item = React.createClass({
  propTypes: {
    name: React.PropTypes.string
  },

  render: function() {
    return (
      <li>{this.props.name}</li>
    );
  }
});
