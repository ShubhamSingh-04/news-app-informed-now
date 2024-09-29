import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 10,
    category: 'general',
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
      totalResults: 0

    };
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=23b53ac6537c4716826329b0b391a2e0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults
    });
  }

  async componentDidMount() {
    this.updateNews();
    document.title = `Informed Now - ${this.capitalize(this.props.category)}`;
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      this.setState({
        page: 1
      }
      );
      this.updateNews();
      document.title = `Informed Now - ${this.capitalize(this.props.category)}`;
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: 'smooth'
    })
  }

  handleNextClick = async () => {

    this.setState({
      page: this.state.page + 1,
    });

    this.updateNews();
    this.scrollToTop();
  }

  handlePrevClick = async () => {

    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();

    this.scrollToTop();
  };

  capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&&category=${this.props.category}&apiKey=23b53ac6537c4716826329b0b391a2e0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResults: parsedData.totalResults
    });
  };



  render() {
    return (
      <>
        <h1 className='text-center'>Our Top Headlines - <strong>USA</strong></h1>
        <h3 className='text-center'>{this.capitalize(this.props.category)}</h3>
        {/* {!this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}

        >
        </InfiniteScroll>

        {<div className='container my-5' style={{ display: 'flex', flexWrap: 'wrap', gap: '66px' }}>
          {this.state.articles.map((ele, index) => {
            if (ele.title !== null && ele.description !== null && ele.title !== '[Removed]') {
              return (<div className="row" key={`${ele.url}-${index}`} style={{ width: '18rem' }}>
                <NewsItem title={ele.title} desc={ele.description} img_url={ele.urlToImage} url={ele.url} publishedAt={ele.publishedAt} author={ele.author} source={ele.source.name} />
              </div>);
            }
            return null;
          })}
        </div>}
      </>
    )
  }
}
