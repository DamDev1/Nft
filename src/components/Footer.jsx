import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="send-nd-join">
                    <div className="send-message">
                        <span>STAY ON THE LOOP</span>
                        <input type="text" placeholder='Your Email' />
                    </div>
                    <div className="join">
                        <span>JOIN COMMUNITIES</span>

                        <div className="social-media">
                            <span>
                                <FaInstagram />
                            </span>
                            <span>
                                <FaFacebookF />
                            </span>
                            <span>
                                <FaSquareXTwitter />
                            </span>
                            <span>
                                <FaTelegram />
                            </span>
                        </div>
                    </div>
                </div>

                <div className="footer-content">
                    <div className="left-content">
                        <div className="logo">
                            <Link>NFT</Link>
                        </div>
                        <p>Produce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for salesProduce an exclusive NFT collection of over 10,000 items by uploading the necessary layers, and prepare to market your collection for sales</p>
                    </div>

                    <div className="right-content">
                        <div className="menu">
                            <span>MY PROFILE</span>
                            <Link>Account</Link>
                            <Link>My Collections</Link>
                            <Link>Connect wallet</Link>
                        </div>

                        <div className="menu">
                            <span>MY PROFILE</span>
                            <Link>Account</Link>
                            <Link>My Collections</Link>
                            <Link>Connect wallet</Link>
                        </div>

                        <div className="menu">
                            <span>MY PROFILE</span>
                            <Link>Account</Link>
                            <Link>My Collections</Link>
                            <Link>Connect wallet</Link>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    ©2024 Developed By <Link>DamDev</Link>
                </div>
            </div>
        </footer>
    )
}
