import React, {Component} from "react";
import {Link} from "react-router";
import API from "../utils/API";
import helper from "../utils/helper";
import Results from "./Results";

class Search extends Component
{
  constructor()
  {
    super();
    this.state = {
      text: "",
      startYear: "",
      endYear: "",
      articles: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event)
  {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleClick(event)
  {
    event.preventDefault();

    helper.runQuery(this.state.text, this.state.startYear, this.state.endYear).then(data =>
    {
      this.setState({articles: data});
      this.state.text = "";
      this.state.startYear = "";
      this.state.endYear = "";
    });
  }

  render()
  {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>NYT Search</h2>
            <p>
              <em>Search the New York Times</em>
            </p>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Form</h3>
              </div>
              <div className="panel-body text-center">
                <form>
                  <div className="form-group">
                    <h4 className="">
                      <strong>Topic</strong>
                    </h4>
                    <input
                      type="text"
                      value={this.state.text}
                      className="form-control"
                      id="text"
                      onChange={this.handleChange}
                      required
                    />

                    <h4>
                      <strong>Start Year</strong>
                    </h4>
                    <input
                      type="number"
                      value={this.state.startYear}
                      className="form-control"
                      id="startYear"
                      onChange={this.handleChange}
                      required
                    />

                    <h4>
                      <strong>End Year</strong>
                    </h4>
                    <input
                      type="number"
                      value={this.state.endYear}
                      className="form-control"
                      id="endYear"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <button
                    className="btn btn-default"
                    onClick={this.handleClick}
                    >SUBMIT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className="col-md-12">
            <Results articleArray={this.state.articles} />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
