App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      issues: Issues.find({}).fetch()
    }
  },

  handleSubmit (event) {
    event.preventDefault();

    // Find the text field via the React ref
    var text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Issues.insert({
      text: text,
      createdAt: new Date()
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  },

  renderIssues() {
    return this.data.issues.map((issue) => {
      return <Issue key={issue._id} issue={issue} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>List</h1>
        </header>

        <form onSubmit={this.handleSubmit} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new issues" />
        </form>

        <ul>
          {this.renderIssues()}
        </ul>
      </div>
    );
  }
});