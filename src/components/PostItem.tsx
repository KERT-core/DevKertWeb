// 필요한 모듈을 import합니다.
import * as React from "react"
import { Link } from "gatsby"

type PostItemProps = {
  title: string
  date: string
  summary: string
  permalink: string
}

const PostItem: React.FC<PostItemProps> = ({ title, date, summary, permalink }) => {
  return (
    <Link to={permalink}>
      <div className="postListItem" role="listitem">
        <div className="postHeader">
          <span className="postTitle">{title}</span>
          <time className="postDate" dateTime={date}>{date}</time>
        </div>
        <div className="postExcerpt">
          <p>{summary}</p>
        </div>
      </div>
    </Link>
  )
}

type PageProps = {
  title: string
  content: string
  pages: PostItemProps[]
}

const Page: React.FC<PageProps> = ({ title, content, pages }) => {
  return (
    <div>
      <div className="listHeader">
        <h1>{title}</h1>
      </div>

      {content && 
        <div className="listContent">
          {content}
        </div>
      }

      <div>
        {pages.map((page, index) => 
          <PostItem 
            key={index}
            title={page.title} 
            date={page.date} 
            summary={page.summary} 
            permalink={page.permalink}
          />
        )}
      </div>
    </div>
  )
}

export default Page
