App = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      issues: Issues.find({}).fetch()
    }
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

        <ul>
          {this.renderIssues()}
        </ul>
      </div>
    );
  }
});