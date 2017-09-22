import React, {Component} from "react";

class SavedArticle extends Component
{
  constructor()
  {
    super();
  }

  render()
  {
    return(
      <div className="panel panel-primary" key={this.props.key}>
        <div className="panel-heading">
          <h3
            className="panel-title">
            <a href={this.props.url}>{this.props.text}</a>
          </h3>
          <button className="btn btn-default"
                  onClick={this.props.remove(this.props._id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default SavedArticle;
