import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Lal Samachar - Top Headlines</h2>
        <div className="row">
            <div className="col-md-4 my-3">
                <NewsItem title = "MyTitle" description = "desc"/>
            </div>
            <div className="col-md-4 my-3">
                <NewsItem title = "MyTitle" description = "desc"/>
            </div>
            <div className="col-md-4 my-3">
                <NewsItem title = "MyTitle" description = "desc"/>
            </div>
            <div className="col-md-4 my-3">
                <NewsItem title = "MyTitle" description = "desc"/>
            </div>
            <div className="col-md-4 my-3">
                <NewsItem title = "MyTitle" description = "desc"/>
            </div>
        </div>
      </div>
    )
  }
}

export default News
