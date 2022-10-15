import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../App'
import withUseQuery, { CombinedProps } from '../../../hoc/withUseQuery'
import "./ArticlesWrapper.scss"

type Props = {
}

type AllProps = CombinedProps<Article[], Props>

type State = {
}

type Article = {
    title: string,
    imgUrl: string,
    publishedAt: string,
    handle: string
}

export class ArticlesWrapper extends Component<AllProps, State> {
    constructor(props: AllProps) {
      super(props)
    
      this.state = {
      }
    }

  render() {
    const {data, isLoading} = this.props.queryResult
    const articles = data?.slice(0, 3)
    
    return isLoading ? (
      <h1>Loading...</h1>
    )
    : (
      <div className="page-width">
        <div className='articles-wrapper'>
        {
          articles!.map(({imgUrl, publishedAt, title, handle}, index) => (
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
      </div>
    )
  }
}

const fetchArticles = async() => {
  const res = await fetch(`${BASE_URL}/blogs/news/tagged/all`) 
  const data = await res.json()
  return data.articles
}

export default withUseQuery<Article[], Props>({
  queryId: ["fetch-articles"],
  queryFn: fetchArticles
})(ArticlesWrapper)