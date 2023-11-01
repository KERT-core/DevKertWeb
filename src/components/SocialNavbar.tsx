// 필요한 모듈을 import합니다.
import * as React from 'react'

type SocialNavbarProps = {
    social: { url: string, name: string, icon?: string, rel?: string }[]
}

const SocialNavbar: React.FC<SocialNavbarProps> = ({ social }) => {
    return (
        <div className="socialNavbar">
            <ul>
                {social.map((item, index) =>
                    <li key={index}>
                        {item.icon ?
                            <a href={item.url} aria-hidden="true" title={item.name} rel={item.rel || undefined}>
                                <i className={item.icon}></i>
                            </a>
                            :
                            <a href={item.url} rel={item.rel || undefined}>{item.name}</a>
                        }
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SocialNavbar
