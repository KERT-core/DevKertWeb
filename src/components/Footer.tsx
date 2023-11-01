// 필요한 모듈을 import합니다.
import * as React from "react"

type FooterProps = {
  footerHtml?: string
  author: string
}

const Footer: React.FC<FooterProps> = ({ footerHtml, author }) => {
  return (
    <footer className="footer">
      {footerHtml ? (
        <span dangerouslySetInnerHTML={{ __html: footerHtml }} />
      ) : (
        <span>
          © {new Date().getFullYear()} {author}, Powered by 
          <a href="https://www.gatsbyjs.com/" className="footerLink">Gatsby</a> and 
          <a href="https://github.com/your-github/your-gatsby-theme" className="footerLink">Your Gatsby Theme</a>
        </span>
      )}
    </footer>
  )
}

export default Footer
