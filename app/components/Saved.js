import React, {Component} from "react";
import {Link} from "react-router";
import API from "../utils/API";
import SavedArticle from "./SavedArticle";

class Saved extends Component
{
  constructor()
  {
    super();
    this.state = {
      savedArticles: []
    };
    this.removeArticle = this.removeArticle.bind(this);
    this.getArticle = this.getArticle.bind(this);
    this.renderSaved = this.renderSaved.bind(this);
  }

  ComponentDidMount()
  {
    this.getArticle();
  }

  getArticle()
  {
    API.getArticle().then(res =>
    {
      this.setState({savedArticles: res.data});
    });
  }

  removeArticle(id)
  {
    API.deleteArticle(id).then(res =>
    {
      this.getArticle();
    });
  }

  renderSaved()
  {
    this.state.savedArticles.map(item =>
    {
      <SavedArticle remove={this.removeArticle}
                    key={item._id}
                    title={item.title}
                    url={item.url} />
    });
  }

  render()
  {
    return(
    <div className="container">
      <div className="row">
        {this.renderSaved()}
      </div>
    </div>
  );
  }
}

export default Saved;
