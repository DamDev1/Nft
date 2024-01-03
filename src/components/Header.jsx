import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <header>
                <div className="logo">
                    <Link>NFT.</Link>
                </div>

                <nav>
                    <div className="nav-menu">
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Team</Link>
                        <Link>Roadmap</Link>
                        <Link>Faq</Link>
                    </div>
                </nav>
                <div className="login-btn">
                    <Link>Login</Link>
                </div>
                <div className={toggle ? "toggle-bar" : "close-bar"} onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={toggle ? "side-bar":"active-sidebar"}>
                    <div className="logo">
                        <Link>NFT.</Link>
                    </div>
                    <div className="nav-menu">
                        <Link>Home</Link>
                        <Link>About</Link>
                        <Link>Team</Link>
                        <Link>Roadmap</Link>
                        <Link>Faq</Link>
                    </div>
                    <div className="login-btn">
                        <Link>Login</Link>
                    </div>
                </div>
            </header>
        </>

    )
}