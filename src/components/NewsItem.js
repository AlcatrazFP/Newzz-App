import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newUrl, author, date, source} = this.props
    return (
      <div className="container my-4">
        <div className="card">
          <img src={imageUrl?imageUrl:"https://cdn.dnaindia.com/sites/default/files/styles/half/public/2023/01/26/2568770-untitled-design-2023-01-26t094454.229.jpg"} className="card-img-top" alt="" />
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:"90%"}}>{source}</span>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <Link to={newUrl} className="btn btn-primary">
              Read more
            </Link>
            <p className="card-text"><small className="text-muted">Published by {author?author:"unknown"} <br /> Published at {new Date(date).toGMTString()}</small></p>
            <p className="card-text"><small className="text-muted"></small></p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
