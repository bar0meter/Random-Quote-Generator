import React, { Component } from "react";

class Twitter extends Component {
  state = {};
  render() {
    const link = `https:/twitter.com/intent/tweet/?text=${this.props.link}`;
    console.log(link);
    return (
      <a target="blank" className="btn btn-success" href={link}>
        <i className="fab fa-twitter" />
      </a>
    );
  }
}

export default Twitter;
