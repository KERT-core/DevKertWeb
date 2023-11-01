// 필요한 모듈을 import합니다.
import * as React from "react"
import { Link } from "gatsby"

type TagProps = {
  relPermalink: string
  linkTitle: string
}

type TagsProps = {
  tags: TagProps[]
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <>
      <dt>Tags</dt>
      <dd>
        {tags.map((tag, index) => 
          <span key={index}>
            <Link to={tag.relPermalink}>#{tag.linkTitle}</Link>
          </span>
        )}
      </dd>
    </>
  )
}

export default Tags
