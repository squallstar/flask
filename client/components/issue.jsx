Issue = React.createClass({
  propTypes: {
    issue: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.issue.text}</li>
    );
  }
});