import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }

    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    } 

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updatePage(){
    const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8a6cce56c8884a028e18a6bd63f38a26&pageSize=${this.props.pageSize}&page=${this.state.page}`;

      this.setState({loading:true})
      let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading:false
    });
  }

  async componentDidMount() {
    this.updatePage();
  }
  handlePrevClick = async () => {
    this.setState({page:this.state.page-1})
    this.updatePage();
  };
  handleNextClick = async () => {
    this.setState({page:this.state.page+1})
    this.updatePage();
  };

  render() {
    return (
      <div className="container my-4" >
        <h1 className="text-center">Top News Headlines</h1>
        {this.state.loading&&<Spinner />}
        <div className="row">
          {!this.state.loading&&this.state.articles.map((ele) => {
            return (
              <div className="col-md-4" key={ele.url}>
                <NewsItem
                  title={ele.title?ele.title.slice(0,40):""}
                  description={ele.description?ele.description.slice(0,90):""}
                  imageUrl={ele.urlToImage}
                  newUrl={ele.url}
                  author={ele.author}
                  date={ele.publishedAt}
                  source={ele.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container my-3 d-flex justify-content-between">
          <button
            type="button"
            disabled={ this.state.page <=1 }
            onClick={this.handlePrevClick}
            className="btn btn-info"
          >
            &larr;Previous
          </button>
          <button
            type="button"
            disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            onClick={this.handleNextClick}
            className="btn btn-info"
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
