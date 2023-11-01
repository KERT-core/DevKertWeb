// 필요한 모듈을 import합니다.
import * as React from "react"

type PostProps = {
  title: string
  content: string
  showMetadata?: boolean
  tags?: string[]
  authors?: string[]
  categories?: string[]
  published?: boolean
  date?: string
  readingTime?: number
}

const Post: React.FC<PostProps> = ({ 
  title, 
  content, 
  showMetadata = true, 
  tags = [], 
  authors = [], 
  categories = [], 
  published = true, 
  date, 
  readingTime 
}) => {
  return (
    <div className="postWrapper">
      <h1>{title}</h1>
      {showMetadata &&
        <section className="postMetadata">
          <dl>
            {tags.length > 0 && 
              <>
                <dt>Tags</dt>
                {tags.map((tag, index) => <dd key={index}>{tag}</dd>)}
              </>
            }
            {authors.length > 0 && 
              <>
                <dt>Authors</dt>
                {authors.map((author, index) => <dd key={index}>{author}</dd>)}
              </>
            }
            {categories.length > 0 && 
              <>
                <dt>Categories</dt>
                {categories.map((category, index) => <dd key={index}>{category}</dd>)}
              </>
            }
            {published && date &&
              <>
                <dt>Published</dt>
                <dd><time dateTime={date}>{date}</time></dd>
              </>
            }
            {readingTime &&
              <>
                <dt>Reading Time</dt>
                <dd>{readingTime} minutes</dd>
              </>
            }
          </dl>
        </section>
      }
      <div>
        {content}
      </div>
    </div>
  )
}

export default Post
