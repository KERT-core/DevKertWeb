// 필요한 모듈을 import합니다.
import * as React from 'react'
import { Helmet } from "react-helmet"

type NotFoundProps = {
    author: string
}

const NotFound: React.FC<NotFoundProps> = ({ author }) => {
    return (
        <>
            <Helmet>
                <title>404 | {author}</title>
            </Helmet>
            <main>
                <h1>Not Found</h1>
                <p>The page you were looking for could not be found.</p>
            </main>
        </>
    )
}

export default NotFound
