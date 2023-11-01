// 필요한 모듈을 import합니다.
import * as React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'

type HeaderProps = {
    user: string,
    hostname: string,
    headerMenu: { url: string, title: string, name: string }[]
}

const Header: React.FC<HeaderProps> = ({ user, hostname, headerMenu }) => {
    return (
        <header className="headerWrapper">
            <div className="header">
                <div>
                    <Link to="/">
                        <span className="terminal">{user}@{hostname} ~ $</span>
                    </Link>
                </div>
                <input className="side-menu" type="checkbox" id="side-menu" />
                <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
                <nav className="headerLinks">
                    <ul>
                        {headerMenu.map((menu, index) =>
                            <li key={index}>
                                <Link to={menu.url} title={menu.title}>
                                    ~/{menu.name}
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
