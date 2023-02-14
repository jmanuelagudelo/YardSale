import React from "react";
import '../styles/MainStyle.scss';
import '../styles/mobile.css';
import logo from '../logos/logo-second-hand.svg'
import IconMenu from '../icons/icon_menu.svg'
import ShoppingImg from '../icons/icon_shopping_cart.svg'
import IconClose from '../icons/icon_close.png'

const Home = () => {
    return(
        <nav className="main-nav">
            <img src={IconMenu} alt="icon_menu" className="menu"/>

            <div className="navbar-left">
                <img src={logo} alt="logo" className="logo-nav"/>

                <ul>
                    <li>
                        <a href="/">All Products</a>
                    </li>
                    <li>
                        <a href="/">Hoodies</a>
                    </li>
                    <li>
                        <a href="/">Sweeter</a>
                    </li>
                    <li>    
                        <a href="/">Shirts</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
            <ul>
                <li className="navbar-email">
                    email@example.com
                </li>
                <li className="navbar-shopping-cart">
                    <img src={ShoppingImg} alt="shopping-cart"/> 
                    <div>0</div>
                </li>
            </ul>
            </div>

            <div className="desktop-menu inactive">
            <ul>
                <li>
                    <a href="/" className="title">My orders</a>
                </li>
                 <li>
                    <a href="/">My account</a>
                </li>
                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
            </div>

            <div className="mobile-menu inactive">
            <ul>
                <li>
                    <a href="/">CATEGORIES</a>
                </li>
                <li>
                    <a href="/">All Products</a>
                </li>
                <li>
                    <a href="/">Hoodies</a>
                </li>
                <li>
                    <a href="/">Sweeter</a>
                </li>
                <li>
                    <a href="/">Shirts</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="/">My orders</a>
                </li>
                <li>
                 <a href="/">My account</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="/" className="email">email@example.com</a>
                </li>
                <li>
                    <a href="/" className="sign-out">Sign out</a>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Home