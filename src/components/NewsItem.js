import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, desc, img_url, url} = this.props;
    return (
      <div style={{display:'flex', flexDirection: 'column'}}>
        <div className="mx-2 my-3" style={{width: '18rem', display:'inline-block', border:'2px solid black', borderRadius: '10px', overflow:'hidden'}}>
          <img className="card-img-top" src={img_url} alt="Card cap"></img>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{desc}</p>
              <a href={url} className="btn btn-dark btn-sn" rel="noreferrer" target='_blank'>Read More</a>
            </div>
        </div>

                        {/* # Your NewsAPI key (replace with your actual API key)
                api_key = '23b53ac6537c4716826329b0b391a2e0'

                # Base URL for the NewsAPI
                url = 'https://newsapi.org/v2/everything' */}
      </div>
    )
  }
}

export default NewsItem
