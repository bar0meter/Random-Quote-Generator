import React, { Component } from "react";
import Twitter from "./twiter";
import "./quoteBox.css";

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    };
  }

  handleQuoteChange = () => {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => res.json())
      .then(data => this.setState({ quote: data.quote, author: data.author }));
  };

  componentDidMount() {
    fetch("https://talaikis.com/api/quotes/random/")
      .then(res => res.json())
      .then(data => this.setState({ quote: data.quote, author: data.author }));
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-text-center">
          <div className="card text-success mt-5 mx-auto">
            <blockquote className="blockquote">
              <p className="mb-0 p-3">
                <i className="fa fa-quote-left fa-lg" />
                {this.state.quote}
              </p>
              <footer className="blockquote-footer text-success ml-3">
                {this.state.author}
              </footer>
            </blockquote>
            <div className="text-center mb-2">
              <Twitter link={this.state.quote} />
              <button
                type="button"
                className="btn btn-success ml-2"
                onClick={this.handleQuoteChange}
              >
                <i className="fas fa-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
