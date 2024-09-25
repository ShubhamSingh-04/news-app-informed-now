import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

  static defualtProps = {
    country: 'us',
    pageSize: 10,
    category: 'general'
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: null
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=23b53ac6537c4716826329b0b391a2e0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    });
  }

  scrollToTop = ()=>{
    window.scrollTo({
      top: 10,
      behavior: 'smooth'
    })
  }

  handleNextClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=23b53ac6537c4716826329b0b391a2e0&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      totalResults: this.state.totalResults,
      loading: false
    });

    this.scrollToTop();
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=23b53ac6537c4716826329b0b391a2e0&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      totalResults: this.state.totalResults,
      loading: false
    });

    this.scrollToTop();
  };
  


  render() {
    return (
      <>
        <h1 className='text-center'>Our Top Headlines - <strong>USA</strong></h1>
        <h3 className='text-center'>{this.props.category}</h3>
        {this.state.loading && <Spinner/>}

        {(!this.state.loading) && <div className='container my-5' style={{ display: 'flex', flexWrap: 'wrap', gap: '66px' }}>
          {this.state.articles.map((ele) => {
            if (ele.title !== null && ele.description !== null && ele.title !== '[Removed]') {
              return (<div className="row" key={ele.url} style={{ width: '18rem' }}>
                <NewsItem title={ele.title} desc={ele.description} img_url={ele.urlToImage} url={ele.url} />
              </div>);
            }
            return null;
          })}
        </div>}
        
        <div className="next-prev d-flex justify-content-around my-5">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>

          <button type="button" disabled={Math.ceil(this.state.totalResults / 10) < this.state.page + 1} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </>
    )
  }
}
