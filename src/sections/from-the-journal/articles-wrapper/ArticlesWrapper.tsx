import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../App'
import "./ArticlesWrapper.scss"

type Props = {
}

type State = {
    articles: Article[]
}

type Article = {
    title: string,
    imgUrl: string,
    publishedAt: string,
    handle: string
}

export class ArticlesWrapper extends Component<Props, State> {
    constructor(props: Props) {
      super(props)
    
      this.state = {
        articles: []
      }
    }
    
    componentDidMount(): void {
        const fetchArticles = async() => {
            const res = await fetch(`${BASE_URL}/blogs/news`) 
            const data = await res.json()
            console.log(data);
            this.setState({
                articles: data.articles.slice(0, 3)
            })
        }

        fetchArticles()
    }

  render() {
    const {articles} = this.state
    
    return (
      <div className="page-width">
          {articles.length === 0 ? (
            <h1>Loading...</h1>
          ) : (
              <div className='articles-wrapper'>
              {
                articles.map(({imgUrl, publishedAt, title, handle}, index) => (
                  <div className="article-wrapper" key={index}>
                      <Link to={`/blogs/${handle}`}>
                          <div className="img-wrapper">
                              <img src={imgUrl} alt={title} />
                          </div>
                      </Link>
                      <div className="content-wrapper">
                        <p className='published-at'>{publishedAt.substring(3)}</p>
                        <Link to={`/blogs/${handle}`}>
                            <p className='title'>{title}</p>
                        </Link>
                      </div>
                  </div>
                ))}
              </div>
              )
          }  
      </div>
    )
  }
}

export default ArticlesWrapper