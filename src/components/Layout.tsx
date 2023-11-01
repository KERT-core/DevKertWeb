// 필요한 모듈을 import합니다.
import * as React from 'react'
import { Helmet } from "react-helmet"
import Header from './Header'
import Footer from './Footer'
import SocialNavbar from './SocialNavbar'

type LayoutProps = {
    author: string,
    languageCode: string,
    social?: { url: string, name: string, icon?: string, rel?: string }[]
}

const Layout: React.FC<LayoutProps> = ({ children, author, languageCode, social }) => {
    return (
        <html lang={languageCode}>
            <Helmet>
                <title>Home | {author}</title>
            </Helmet>
            <body>
                <div className="flexWrapper">
                    <Header />
                    <div className="content vertical">
                        <main className="main">
                            <div className="indexWrapper">
                                <div>
                                    <h1 className="indexHeader">{author}</h1>
                                </div>
                                {social && <SocialNavbar social={social} />}
                            </div>
                        </main>
                    </div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}

export default Layout
