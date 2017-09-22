import React, {Component} from "react";
import API from "../utils/API";

class ArticlePanel extends Component
{
  constructor()
  {
    super();
    this.saveClick = this.saveClick.bind(this);
  }

  saveClick()
  {
    var article = {
      title: this.props.headline,
      url: this.props.web_url
    };
    API.addArticle(article).then(data =>
    {
      console.log(data);
    });
  }

  render()
  {
    return(
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3
            className="panel-title" value={this.props.headline}>
            <a href={this.props.web_url}>{this.props.headline}</a>
          </h3>
          <button className="btn btn-default"
                  onClick={this.saveClick}>Save</button>
        </div>
        <div className="panel-body" url={this.props.web_url}>
          {this.props.snippet}
        </div>
      </div>
    );
  }
}

export default ArticlePanel;
