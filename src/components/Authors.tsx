// 필요한 모듈을 import합니다.
import * as React from "react"
import { Link } from "gatsby"

type AuthorProps = {
  relPermalink: string
  linkTitle: string
}

type AuthorsProps = {
  authors: AuthorProps[]
}

const Authors: React.FC<AuthorsProps> = ({ authors }) => {
  return (
    <>
      <dt>Authors</dt>
      <dd>
        {authors.map((author, index) => 
          <span key={index}>
            <Link to={author.relPermalink}>{author.linkTitle}</Link>
          </span>
        )}
      </dd>
    </>
  )
}

export default Authors
