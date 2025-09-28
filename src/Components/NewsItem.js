import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div className="my-2">
        <div className="card">
          <div style={{display: 'flex',justifyContent: 'flex-end', position: 'absolute',right: '0'}}>
            <span className="badge rounded-pill bg-success">{source}</span>
          </div>

          <img src={!imageUrl?"https://static.files.bbci.co.uk/core/website/assets/static/sport/bbc-sport-logo.0da9386782224b380455.png":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Know More...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
