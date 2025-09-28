import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultprops = {
    country : 'in',
    pageSize : 4,
    category : 'general'
  };

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  };

  constructor(){
    super();
    this.state = {
      articles : [],
      loading : false,
      page : 1 
    }
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee61f35bdbe547b3ac4af1739458411a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({
        loading: false,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults
      });
    } catch (error) {
      // Handle any errors during the fetch
      console.error("Error fetching the news:", error);
      this.setState({ loading: false });
    }
  }
  
  async componentDidMount() {
    this.updateNews();
  }
  
  
  handlePrevClick = async ()=>{
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee61f35bdbe547b3ac4af1739458411a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({
    //   loading : true
    // })

    // let data = await fetch(url);
    // let parsedData = await data.json();
    //   this.setState({page : this.state.page + 1,
    //     articles : parsedData.articles,
    //     loading : false
    //   })

    this.setState({page : this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async ()=>{
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ee61f35bdbe547b3ac4af1739458411a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({
    //       loading : true
    //     })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({page : this.state.page + 1,
    //       articles : parsedData.articles,
    //       loading : false
    //     })
    // }
    
    this.setState({page : this.state.page + 1});
    this.updateNews();
  }

  render() {
    return (
      <div>
        <div className='container my-3'>
            <h1 className='text-center'>NewsApp - Top Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className='row'>
              {!this.state.loading && this.state.articles.map((element) =>{
                return <div className='col md-4' key={element.url}>
                  <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} 
                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                </div>
              })}               
            </div>
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prevoius</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>        
      </div>
    )
  }
}

export default News
