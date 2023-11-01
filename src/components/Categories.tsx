// 필요한 모듈을 import합니다.
import * as React from "react"
import { Link } from "gatsby"

type CategoryProps = {
  relPermalink: string
  linkTitle: string
}

type CategoriesProps = {
  categories: CategoryProps[]
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <>
      <dt>Categories</dt>
      <dd>
        {categories.map((category, index) => 
          <span key={index}>
            <Link to={category.relPermalink}>{category.linkTitle}</Link>
          </span>
        )}
      </dd>
    </>
  )
}

export default Categories
