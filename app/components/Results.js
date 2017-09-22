import React, {Component} from "react";
import ArticlePanel from "./ArticlePanel";
class Results extends Component
{
  constructor()
  {
    super();
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults()
  {
    return this.props.articleArray.map(item =>(
      <ArticlePanel
        headline = {item.headline.main}
        web_url = {item.web_url}
        snippet = {item.snippet} />
      ));
  }

  render()
  {
    return(
        <div>
          {this.renderResults()}
        </div>
    );
  }
}

export default Results;
